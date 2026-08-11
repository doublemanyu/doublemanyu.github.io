---
title: "Event-Based and RGB-Event Multimodal Vision"
title_zh: "事件视觉与 RGB-Event 多模态感知"
collection: research
permalink: /research/event-based-vision/
date: 2020-09-01
venue: "Dalian University of Technology"
venue_zh: "大连理工大学"
excerpt: "Video understanding, RGB-Event multimodal fusion, efficient human pose estimation, and spatiotemporal modeling for complex scenes."
excerpt_zh: "面向复杂场景的视频理解、RGB-Event 多模态融合、高效人体姿态估计及时空建模研究。"
---

<div data-lang-block="en" markdown="1">

My doctoral research focuses on **video understanding and event-based visual perception for complex dynamic scenes**. I study how asynchronous event data can complement RGB appearance information, and how adaptive computation can improve the efficiency of visual Transformers on spatially sparse observations.

## Project Snapshot

<div class="research-snapshot">
  <section>
    <h3>Multimodal Fusion</h3>
    <p>RGB-Event cross-modal fusion and adaptation of RGB-pretrained instance segmentation models to event observations.</p>
  </section>
  <section>
    <h3>Efficient Pose Estimation</h3>
    <p>Adaptive patch sampling and token reduction for high-frequency event-based human pose estimation.</p>
  </section>
  <section>
    <h3>Spatiotemporal Modeling</h3>
    <p>Asynchronous event processing, multi-frequency hypergraph fusion, and multi-scale relations in complex dynamic systems.</p>
  </section>
</div>

## Research Role

- Design and adapt visual architectures for event-based and RGB-Event perception.
- Develop event-stream processing and representation pipelines.
- Train and optimize models, conduct ablation studies, and evaluate accuracy and inference efficiency.
- Construct datasets and benchmarks for event-based perception.
- Analyze multimodal fusion and spatiotemporal relation modeling in complex scenes.

## Current Direction: RGB-Event Video Instance Segmentation

RGB-pretrained instance segmentation models encode strong appearance priors but are not directly optimized for the sparse and asynchronous characteristics of event data. My current work studies instance-level temporal perception that introduces event information into an RGB-based model and evaluates the contribution of cross-modal fusion. This work has produced a first-author manuscript submitted to AAAI 2027.

## Adaptive Vision Transformer for Human Pose Estimation

For spatially sparse event observations, processing every patch and token creates unnecessary background computation. I developed an adaptive Vision Transformer that first filters inactive patches and then reduces less informative tokens inside the network. The model reaches a reported **179 FPS** and was published at ACM Multimedia 2024.

The accompanying EventMM-HPE dataset supports high-frequency human pose analysis with event, RGB, and motion-capture measurements.

![Experimental setup and sensor configuration](/images/Figure1.png)

## Related Project Experience

- **Huawei Innovation Research Program (2021 - 2023):** event-image semantic segmentation and gait recognition for low-light, high-dynamic-range, and fast-motion scenes; the Carla-Semantic segmentation experiments improved mIoU by 6.51% and MPA by 4.93%.
- **Science and Technology Innovation 2030 Major Project (2022 - 2024):** asynchronous event processing, multi-frequency hypergraph fusion, and multi-scale spatiotemporal relation modeling.

</div>

<div data-lang-block="zh" markdown="1">

我的博士研究聚焦于**复杂动态场景中的视频理解与事件视觉感知**。研究重点包括异步事件数据如何补充 RGB 外观信息，以及如何通过自适应计算提升视觉 Transformer 处理空间稀疏观测时的效率。

## 项目概览

<div class="research-snapshot">
  <section>
    <h3>多模态融合</h3>
    <p>研究 RGB-Event 跨模态融合，以及 RGB 预训练实例分割模型在事件观测上的适配。</p>
  </section>
  <section>
    <h3>高效姿态估计</h3>
    <p>通过自适应 Patch 采样与 Token 缩减实现高频事件相机人体姿态估计。</p>
  </section>
  <section>
    <h3>时空关系建模</h3>
    <p>研究复杂动态系统中的异步事件处理、多频超图融合与多尺度时空关系。</p>
  </section>
</div>

## 研究职责

- 设计并适配面向事件视觉和 RGB-Event 感知的视觉模型。
- 构建事件流处理与事件表征流程。
- 开展模型训练调优、消融实验、精度评估与推理效率分析。
- 构建事件视觉数据集与 benchmark。
- 分析复杂场景中的多模态融合和时空关系建模方法。

## 当前方向：RGB-Event 视频实例分割

RGB 预训练实例分割模型具有较强的外观先验，但没有针对事件数据稀疏、异步的特性进行优化。当前研究将事件信息引入基于 RGB 的模型，探索实例级时序感知，并评估跨模态融合的贡献。相关工作形成 AAAI 2027 在投稿件，第一作者。

## 自适应视觉 Transformer 人体姿态估计

针对事件观测空间稀疏、背景计算冗余的问题，我设计了先过滤非活动 Patch、再在网络内部缩减低信息量 Token 的自适应视觉 Transformer。模型报告的推理速度达到 **179 FPS**，成果发表于 ACM Multimedia 2024。

配套构建的 EventMM-HPE 数据集融合事件、RGB 与运动捕捉测量，支持高频人体姿态分析。

![实验装置与传感器配置](/images/Figure1.png)

## 相关项目经历

- **华为创新研究计划（2021 - 2023）：** 面向低照度、高动态范围和快速运动场景，开展事件图像语义分割与步态识别研究；Carla-Semantic 分割实验实现 mIoU 提升 6.51%、MPA 提升 4.93%。
- **科技创新 2030 重大项目（2022 - 2024）：** 研究异步事件处理、多频超图融合与多尺度时空关系建模。

</div>
