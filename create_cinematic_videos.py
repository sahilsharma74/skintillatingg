import os
import glob
import math
import numpy as np
from PIL import Image
import imageio

ARTIFACT_DIR = r"C:\Users\sahil\.gemini\antigravity\brain\b8babb7f-b3f3-41ac-acd3-662daf2db94a"
OUTPUT_DIR = r"c:\Users\sahil\Downloads\skintillatingg project\public\videos\ciatn"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Map filenames to pattern match in artifact dir & video motion type
VIDEOS_CONFIG = [
    {
        "pattern": "ciatn_laser_technology_*.png",
        "output": "laser-technology.mp4",
        "motion": "push_in",  # Slow cinematic push-in
        "duration": 6,
    },
    {
        "pattern": "ciatn_trichology_*.png",
        "output": "trichology.mp4",
        "motion": "pan_lateral",  # Slow lateral movement
        "duration": 6,
    },
    {
        "pattern": "ciatn_prp_mesotherapy_*.png",
        "output": "prp-mesotherapy.mp4",
        "motion": "close_up_drift",  # Slow controlled close-up movement
        "duration": 6,
    },
    {
        "pattern": "ciatn_hifu_*.png",
        "output": "hifu.mp4",
        "motion": "side_movement",  # Slow elegant side movement
        "duration": 6,
    },
    {
        "pattern": "ciatn_facial_aesthetics_*.png",
        "output": "facial-aesthetics.mp4",
        "motion": "close_up",  # Slow cinematic close-up
        "duration": 6,
    },
    {
        "pattern": "ciatn_chemical_peels_*.png",
        "output": "chemical-peels.mp4",
        "motion": "push_in",  # Slow close-up push-in
        "duration": 6,
    },
    {
        "pattern": "ciatn_laser_hair_reduction_*.png",
        "output": "laser-hair-reduction.mp4",
        "motion": "tracking",  # Slow smooth tracking movement
        "duration": 6,
    },
    {
        "pattern": "ciatn_botox_fillers_*.png",
        "output": "botox-fillers.mp4",
        "motion": "push_in",  # Slow cinematic push-in
        "duration": 6,
    },
    {
        "pattern": "ciatn_thread_lift_*.png",
        "output": "thread-lift.mp4",
        "motion": "cinematic_move",  # Slow cinematic movement
        "duration": 6,
    },
    {
        "pattern": "ciatn_advanced_facial_devices_*.png",
        "output": "advanced-facial-devices.mp4",
        "motion": "product_pan",  # Slow product-style camera movement
        "duration": 6,
    },
]

TARGET_W, TARGET_H = 1280, 720
FPS = 30

def render_video(img_path, out_path, motion_type, duration):
    img = Image.open(img_path).convert("RGB")
    orig_w, orig_h = img.size
    
    total_frames = int(FPS * duration)
    writer = imageio.get_writer(out_path, fps=FPS, codec="libx264", pixelformat="yuv420p")
    
    for i in range(total_frames):
        t = i / float(total_frames - 1)
        # Ease in-out smooth sine curve
        ease_t = 0.5 - 0.5 * math.cos(t * math.pi)
        
        if motion_type == "push_in":
            scale = 1.0 + 0.12 * ease_t
            dx = 0.02 * ease_t
            dy = 0.01 * ease_t
        elif motion_type == "pan_lateral":
            scale = 1.08
            dx = -0.04 + 0.08 * ease_t
            dy = 0.0
        elif motion_type == "close_up_drift":
            scale = 1.0 + 0.10 * ease_t
            dx = 0.01 * math.sin(t * math.pi)
            dy = -0.02 * ease_t
        elif motion_type == "side_movement":
            scale = 1.06
            dx = 0.04 - 0.08 * ease_t
            dy = 0.01 * ease_t
        elif motion_type == "close_up":
            scale = 1.0 + 0.14 * ease_t
            dx = 0.0
            dy = 0.0
        elif motion_type == "tracking":
            scale = 1.07
            dx = -0.03 + 0.06 * ease_t
            dy = 0.01 * math.sin(t * math.pi)
        elif motion_type == "cinematic_move":
            scale = 1.04 + 0.08 * ease_t
            dx = -0.02 + 0.04 * ease_t
            dy = -0.01 + 0.02 * ease_t
        elif motion_type == "product_pan":
            scale = 1.05 + 0.07 * ease_t
            dx = 0.03 - 0.06 * ease_t
            dy = -0.01 * ease_t
        else:
            scale = 1.0 + 0.1 * ease_t
            dx, dy = 0.0, 0.0

        # Calculate crop rectangle
        crop_w = orig_w / scale
        crop_h = orig_h / scale
        
        center_x = (orig_w / 2.0) + (dx * orig_w)
        center_y = (orig_h / 2.0) + (dy * orig_h)
        
        left = max(0, min(orig_w - crop_w, center_x - crop_w / 2.0))
        top = max(0, min(orig_h - crop_h, center_y - crop_h / 2.0))
        right = left + crop_w
        bottom = top + crop_h
        
        cropped = img.crop((int(left), int(top), int(right), int(bottom)))
        resized = cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
        
        writer.append_data(np.array(resized))
        
    writer.close()
    print(f"Rendered {out_path}")

def main():
    for item in VIDEOS_CONFIG:
        matches = glob.glob(os.path.join(ARTIFACT_DIR, item["pattern"]))
        if not matches:
            print(f"Warning: No match found for {item['pattern']}")
            continue
        img_path = matches[0]
        out_path = os.path.join(OUTPUT_DIR, item["output"])
        print(f"Rendering {item['output']} from {os.path.basename(img_path)}...")
        render_video(img_path, out_path, item["motion"], item["duration"])
    print("All videos rendered successfully!")

if __name__ == "__main__":
    main()
