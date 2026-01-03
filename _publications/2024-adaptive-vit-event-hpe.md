---
title: "Adaptive Vision Transformer for Event-Based Human Pose Estimation"
collection: publications
publication_type: conferences
permalink: /publications/adaptive-vit-event-hpe/
year: 2024
venue: "Conference on Event-Based Vision"
authors: "Nannan Yu et al."
paperurl: "https://dl.acm.org/doi/10.1145/3664647.3681401"
---

## Abstract

Event-based human pose estimation has gained popularity due to the high temporal resolution and high dynamic range offered by event cameras. The inherent spatial sparsity of event data makes discarding less significant regions a straightforward and effective way to reduce computational cost. However, implementing such operations in conventional convolutional neural networks is challenging, as it disrupts the regularity of dense convolutional workloads.

In this work, we propose an **Adaptive Vision Transformer**, a novel and efficient backbone for event-based human pose estimation. Specifically, we introduce two adaptive strategies tailored to the characteristics of event data. First, an adaptive patch sampling scheme is designed to remove inactive patches by evaluating the entropy of events before they are fed into the transformer. Second, we propose an adaptive token reduction strategy that dynamically prunes less informative tokens within transformer layers, further improving computational efficiency while maintaining performance.

To better exploit event-based visual cues for human pose estimation, we construct a large-scale frame–event dataset named **Event Multi-Movement HPE (EventMM-HPE)**, which provides annotation frequencies of up to 240 Hz. Extensive experiments demonstrate that the proposed method achieves superior estimation accuracy compared with existing state-of-the-art approaches.

## Resources

- **Source code and dataset**:  
  [GitHub repository](https://github.com/doublemanyu/Adaptive-Vision-Transformer-for-Event-Based-HPE)