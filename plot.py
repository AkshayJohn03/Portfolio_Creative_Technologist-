import os
import matplotlib.pyplot as plt
from tensorboard.backend.event_processing.event_accumulator import EventAccumulator
from collections import defaultdict

log_dir = r"D:\aria\aria_ai\aria_ai_assistant\artifacts\zia_ift_v3_retrain\runs"
event_files = [os.path.join(log_dir, f) for f in os.listdir(log_dir) if 'events' in f]

steps = []
losses = []

for f in sorted(event_files):
    ea = EventAccumulator(f)
    ea.Reload()
    
    tags = ea.Tags()['scalars']
    
    for tag in tags:
        if 'loss' in tag.lower() or 'train/loss' == tag:
            events = ea.Scalars(tag)
            for e in events:
                steps.append(e.step)
                losses.append(e.value)
            break

if len(steps) > 0:
    plt.figure(figsize=(10, 5))
    plt.plot(steps, losses, label='Loss', color='#3b82f6', linewidth=2)
    plt.xlabel('Steps', fontsize=12, color='white')
    plt.ylabel('Loss', fontsize=12, color='white')
    plt.title('ZIA Training Loss', fontsize=14, color='white')
    plt.grid(True, alpha=0.2)
    
    # Dark mode styling for transparent background
    ax = plt.gca()
    ax.set_facecolor('none')
    fig = plt.gcf()
    fig.patch.set_facecolor('none')
    ax.spines['bottom'].set_color('white')
    ax.spines['top'].set_color('white')
    ax.spines['left'].set_color('white')
    ax.spines['right'].set_color('white')
    ax.xaxis.label.set_color('white')
    ax.yaxis.label.set_color('white')
    ax.tick_params(axis='x', colors='white')
    ax.tick_params(axis='y', colors='white')
    
    os.makedirs(r"d:\portfolio\public\zia", exist_ok=True)
    plt.savefig(r"d:\portfolio\public\zia\loss_curve.png", transparent=True, dpi=300, bbox_inches='tight')
    print("Loss curve generated.")
else:
    print("No train/loss found.")
