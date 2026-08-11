---
title: "Adaptive Vision Transformer for Event-Based Human Pose Estimation"
title_zh: "用于事件相机人体姿态估计的自适应视觉 Transformer"
collection: publications
permalink: /publications/eventmm-hpe/
excerpt: "An adaptive Vision Transformer for efficient event-based human pose estimation, evaluated with the high-frequency EventMM-HPE dataset."
excerpt_zh: "面向高效事件相机人体姿态估计的自适应视觉 Transformer 与高频帧-事件数据集。"
date: 2024-10-28
venue: "The 32nd ACM International Conference on Multimedia (ACM Multimedia 2024)"
venue_zh: "第 32 届 ACM 国际多媒体会议（ACM Multimedia 2024）"
status: "Published"
status_zh: "已发表"
authors: "Nannan Yu, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang"
paperurl: "https://dl.acm.org/doi/10.1145/3664647.3681401"
citation: 'Yu, N., Ma, T., Zhang, J., Zhang, Y., Bao, Q., Wei, X., & Yang, X. "Adaptive Vision Transformer for Event-Based Human Pose Estimation." <i>Proceedings of the 32nd ACM International Conference on Multimedia</i>, 2024, pp. 2833–2841. https://doi.org/10.1145/3664647.3681401.'
citation_zh: 'Yu, N., Ma, T., Zhang, J., Zhang, Y., Bao, Q., Wei, X., & Yang, X. “Adaptive Vision Transformer for Event-Based Human Pose Estimation.” <i>Proceedings of the 32nd ACM International Conference on Multimedia</i>, 2024, pp. 2833–2841. https://doi.org/10.1145/3664647.3681401.'
category: conferences
---

<div data-lang-block="en" markdown="1">

**Authors:** **Nannan Yu**, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang

## Overview

This work studies **event-based human pose estimation**, taking advantage of the high temporal resolution and high dynamic range of event cameras. We propose an **Adaptive Vision Transformer** and introduce a multi-movement frame-event dataset for high-frequency human pose estimation. The work was published at **ACM Multimedia 2024**.

## Adaptive Vision Transformer

Event data are spatially sparse, so conventional dense computation can spend substantial resources on inactive regions. The proposed backbone introduces two adaptive mechanisms:

1. **Adaptive Patch Sampling:** inactive patches are removed by evaluating event-data entropy before Transformer processing.
2. **Adaptive Token Reduction:** a dynamic token-pruning strategy removes less informative tokens within Transformer layers while preserving the task-relevant representation.

The model reaches a reported inference speed of **179 FPS**.

## EventMM-HPE Dataset

The Event Multi-Movement Human Pose Estimation dataset includes:

- 76 human-pose sequences
- 21 actions
- 7 subjects
- 17 annotated joints per subject
- Annotation frequency up to 240 Hz
- Synchronized RGB frames at 120 FPS for multimodal research

## Experimental Setup

![Experimental setup and sensor configuration](/images/Figure1.png)

*Experimental setup with a Prophesee event camera, high-frame-rate RGB camera, and Vicon infrared motion-capture system.*

## Qualitative Results

![Event-based human pose estimation results](/images/Figure2.png)

*Qualitative human pose estimation results produced by the proposed method.*

## Dataset Access

The EventMM-HPE dataset is available through the [project website](http://mmhpe.dluticcd.com). If you encounter any issues or have questions regarding the dataset, please feel free to contact us.

</div>

<div data-lang-block="zh" markdown="1">

**作者：** **于男男**、马涛、张吉庆、张宇基、包启睿、魏小鹏、杨鑫

## 工作概述

本研究面向**事件相机人体姿态估计**，利用事件相机高时间分辨率和高动态范围的优势，提出**自适应视觉 Transformer**，并构建用于高频人体姿态估计的多动作帧-事件数据集。成果发表于 **ACM Multimedia 2024**。

## 自适应视觉 Transformer

事件数据在空间上具有稀疏性，常规稠密计算会在非活动区域产生大量冗余。所提出的骨干网络包含两种自适应机制：

1. **自适应 Patch 采样：** 在进入 Transformer 前，根据事件数据熵移除非活动 Patch。
2. **自适应 Token 缩减：** 在 Transformer 层内动态剪除信息量较低的 Token，同时保留任务相关表征。

模型报告的推理速度达到 **179 FPS**。

## EventMM-HPE 数据集

Event Multi-Movement Human Pose Estimation 数据集包含：

- 76 段人体姿态序列
- 21 类动作
- 7 名受试者
- 每名受试者标注 17 个人体关节点
- 最高 240 Hz 的标注频率
- 120 FPS 同步 RGB 图像，可用于多模态研究

## 实验装置

![实验装置与传感器配置](/images/Figure1.png)

*由 Prophesee 事件相机、高帧率 RGB 相机和 Vicon 红外运动捕捉系统组成的实验装置。*

## 定性结果

![事件相机人体姿态估计结果](/images/Figure2.png)

*所提出方法生成的人体姿态估计定性结果。*

## 数据集获取

EventMM-HPE 数据集可通过[项目网站](http://mmhpe.dluticcd.com)获取。如在使用过程中遇到问题，欢迎联系我们。

</div>
