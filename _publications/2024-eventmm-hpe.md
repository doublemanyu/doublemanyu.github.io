---
title: "Event-Based Multi-Movement Human Pose Estimation (EventMM-HPE)"
collection: publications
publication_type: conferences
permalink: /publications/eventmm-hpe/
date: 2024-01-01
venue: "ACM International Conference on Multimedia (ACM MM 2024)"
authors: "Nannan Yu, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang"
paperurl: "https://dl.acm.org/doi/10.1145/3664647.3681401"
---


## Overview

This research focuses on **event-based human pose estimation**, leveraging the advantages of event cameras such as high temporal resolution and high dynamic range.  
We propose an **Adaptive Vision Transformer** framework and introduce a large-scale multi-modal dataset to support research on event-driven human pose estimation.

This work has been accepted by **The 32nd ACM International Conference on Multimedia (ACM MM 2024)** *(CCF A)*.

---

## Adaptive Vision Transformer for Event-Based Human Pose Estimation

Event-based human pose estimation has gained popularity due to the benefits of high temporal resolution and high dynamic range offered by event cameras.  
However, the inherent spatial sparsity of event data makes it challenging to efficiently process with conventional convolutional neural networks (CNNs), as discarding inactive regions disrupts dense convolutional workloads.

To address this issue, we propose an **Adaptive Vision Transformer**, a novel and efficient backbone specifically designed for event-based human pose estimation.

Our method introduces two key adaptive mechanisms:

1. **Adaptive Patch Sampling**  
   Inactive patches are eliminated by evaluating the entropy of event data before feeding them into the transformer.

2. **Adaptive Token Reduction**  
   A dynamic token pruning strategy selectively removes less informative tokens inside transformer layers, significantly reducing computational cost while preserving performance.

---

## Dataset: Event Multi-Movement HPE (EventMM-HPE)

To fully exploit event-based visual cues, we construct a large-scale frame–event dataset named **Event Multi-Movement Human Pose Estimation (EventMM-HPE)**.

Key characteristics of the dataset include:

- **76 human pose sequences**
- **21 different actions**
- **7 subjects**
- **17 annotated joint points per subject**
- **Annotation frequency up to 240 Hz**
- **Synchronized RGB frames at 120 FPS** to support multi-modal fusion research

This dataset provides a valuable benchmark for high-frequency human pose estimation and event–frame fusion.

---

## Experimental Setup

![Experimental setup and sensor configuration](/images/Figure1.png)

*Figure 1: Experimental setup including Prophesee event camera, high frame-rate RGB camera, and Vicon IR motion capture system.*

The setup consists of:
- Prophesee event camera (master camera)
- High frame-rate RGB camera
- Vicon motion capture system with IR cameras  
The synchronized configuration enables precise ground-truth pose annotation.

---

## Results

![Event-based human pose estimation results](/images/Figure2.png)

*Figure 2: Qualitative results of event-based human pose estimation using the proposed method.*

Extensive experiments demonstrate that the proposed approach **outperforms existing state-of-the-art methods** in estimation accuracy while significantly reducing computational complexity.

---
## DATA link

http://mmhpe.dluticcd.com

If you encounter any issues or have questions regarding the dataset, please feel free to contact us.

---

## Reference

**Adaptive Vision Transformer for Event-Based Human Pose Estimation**  
Nannan Yu, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang  
*Proceedings of the 32nd ACM International Conference on Multimedia (ACM MM 2024)*  
