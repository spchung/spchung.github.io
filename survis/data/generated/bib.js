define({ entries : {
    "Chen2024L": {
        "abstract": "This critical examination of evaluation methodologies for Large Vision-Language Models (LVLMs) identifies fundamental flaws in existing benchmarks: many samples don't require visual understanding, and test answers may leak through pre-training. The authors introduce MMStar, a novel evaluation framework with carefully curated visual-dependent samples and safeguards against data leakage, revealing significant discrepancies between conventional benchmark scores and true multimodal reasoning abilities.",
        "author": "Chen, L. and Li, J. and Dong, X. and Zhang, P. and Zang, Y. and Chen, Z. and Duan, H. and Wang, J. and Qiao, Y. and Lin, D. and Zhao, F.",
        "journal": "arXiv preprint arXiv:2403.20330v2",
        "keywords": "type: Evaluation/Analysis, type: Instruction-tuned Multimodal, perceptual capabilities,data curation techniques,task specific applications",
        "title": "Are We on the Right Way for Evaluating Large Vision-Language Models?",
        "type": "article",
        "url": "https://arxiv.org/html/2403.20330v2",
        "year": "2024"
    },
    "Dosovitskiy2020": {
        "abstract": "This seminal work introduces the Vision Transformer (ViT), which applies the Transformer architecture from natural language processing directly to image recognition. By splitting images into fixed-size patches processed as sequence elements with position embeddings, the model achieves competitive performance with state-of-the-art CNNs when pre-trained on large datasets, demonstrating the viability of pure attention-based mechanisms for computer vision tasks.",
        "author": "Dosovitskiy, A. and Beyer, L. and Kolesnikov, A. and Weissenborn, D. and Zhai, X. and Unterthiner, T. and Dehghani, M. and Minderer, M. and Heigold, G. and Gelly, S. and Uszkoreit, J. and Houlsby, N.",
        "journal": "arXiv preprint arXiv:2010.11929v2",
        "keywords": "type: Foundation Vision Models, type: Novel Architecture, perceptual capabilities,spatial understanding,task specific applications",
        "title": "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
        "type": "article",
        "url": "https://arxiv.org/pdf/2010.11929v2.pdf",
        "year": "2020"
    },
    "Li2023": {
        "abstract": "This paper presents BLIP-2, an efficient vision-language pre-training approach that bridges frozen pre-trained image encoders and large language models through a lightweight Querying Transformer (Q-Former). Using a two-stage training process with minimal new parameters, this bootstrapping approach achieves state-of-the-art performance across image-text retrieval, image captioning, visual question answering, and zero-shot classification tasks while maintaining computational efficiency.",
        "author": "Li, J. and Li, D. and Savarese, S. and Hoi, S.",
        "journal": "arXiv preprint arXiv:2301.12597v3",
        "keywords": "type: Vision-Language Integration, type: Novel Architecture, parameter efficient training,task specific applications,open source",
        "title": "BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models",
        "type": "article",
        "url": "https://arxiv.org/pdf/2301.12597v3.pdf",
        "year": "2023"
    },
    "Li2024": {
        "abstract": "This work introduces VideoAgent, a novel agent-based system for long-form video understanding that employs a large language model as a central coordinator. By dynamically deciding what information to retrieve from videos, leveraging specialized vision-language tools, and implementing an iterative reasoning framework, the system demonstrates effectiveness in handling complex temporal relationships and contextual reasoning, particularly for long-duration videos requiring multi-step analysis across different temporal segments.",
        "author": "Li, X. and Chen, A. and Xia, H. and Wang, X. and Zhang, W. and Yang, H. and Wu, Q.",
        "journal": "arXiv preprint arXiv:2403.10517",
        "keywords": "type: Agent-based Systems, type: Novel Architecture, temporal reasoning,chain of thought reasoning,task specific applications",
        "title": "VideoAgent: Long-form Video Understanding with Large Language Model as Agent",
        "type": "article",
        "url": "https://arxiv.org/abs/2403.10517",
        "year": "2024"
    },
    "Liu2023": {
        "abstract": "This paper introduces LLaVA (Large Language and Vision Assistant), pioneering the extension of instruction tuning from language-only to multimodal models. By using GPT-4 to generate multimodal language-image instruction data and connecting a CLIP vision encoder with a Vicuna language decoder through a simple projection layer, the authors demonstrate strong performance on visual question answering, image captioning, and zero-shot generalization, establishing a foundational approach for multimodal instruction tuning.",
        "author": "Liu, H. and Li, C. and Wu, Q. and Lee, Y. J.",
        "journal": "arXiv preprint arXiv:2304.08485",
        "keywords": "type: Instruction-tuned Multimodal, type: Novel Architecture, data curation techniques,task specific applications,open source,multimodal conversation",
        "title": "Visual Instruction Tuning",
        "type": "article",
        "url": "https://arxiv.org/pdf/2304.08485.pdf",
        "year": "2023"
    },
    "Radford2021": {
        "abstract": "This groundbreaking work introduces CLIP (Contrastive Language-Image Pre-training), a method training highly transferable visual models using natural language supervision instead of labeled datasets. By learning to associate images with their textual descriptions through contrastive learning on 400 million internet-sourced image-text pairs, CLIP enables zero-shot transfer to various vision tasks without task-specific training, demonstrating remarkable robustness to distribution shifts compared to supervised approaches.",
        "author": "Radford, A. and Kim, J. W. and Hallacy, C. and Ramesh, A. and Goh, G. and Agarwal, S. and Sastry, G. and Askell, A. and Mishkin, P. and Clark, J. and Krueger, G. and Sutskever, I.",
        "journal": "arXiv preprint arXiv:2103.00020",
        "keywords": "type: Foundation Vision Models, type: Novel Architecture, contrastive learning methods,data curation techniques,task specific applications",
        "title": "Learning Transferable Visual Models From Natural Language Supervision",
        "type": "article",
        "url": "https://arxiv.org/pdf/2103.00020.pdf",
        "year": "2021"
    },
    "Zhang2024": {
        "abstract": "This paper presents Mini-Gemini, a framework enhancing multimodal Vision Language Models by maximizing the potential of existing open-source components. The architecture integrates a dual-path visual encoder processing both global context and fine details, a vision-language bridge module, and specialized training strategies including curriculum learning. Evaluations across multiple benchmarks demonstrate improved performance in visual question answering, multimodal reasoning, conversational capabilities, and image captioning.",
        "author": "Zhang, Z. and Chen, Y. and Yang, X. and Ge, Y. and Luo, P. and Shan, Y.",
        "journal": "arXiv preprint arXiv:2403.18814",
        "keywords": "type: Instruction-tuned Multimodal, type: Model Improvement, parameter efficient training,open source,task specific applications,multimodal conversation",
        "title": "Mini-Gemini: Mining the Potential of multimodality Vision Language Models",
        "type": "article",
        "url": "https://arxiv.org/pdf/2403.18814.pdf",
        "year": "2024"
    },
    "Zhi2024": {
        "abstract": "This paper presents VideoAgent2, an improved LLM-based agent system for long-form video understanding that implements an uncertainty-aware Chain-of-Thought reasoning process. Through iterative refinement of retrieval strategies, guided coarse-to-fine analysis, and dynamic tool invocation, the system demonstrates enhanced ability to handle complex temporal relationships and context in lengthy videos, showing improved performance on video comprehension tasks compared to baseline systems.",
        "author": "Zhi, Z. and Wu, Q. and Shen, M. and Li, W. and Li, Y. and Shao, K. and Zhou, K.",
        "journal": "arXiv preprint arXiv:2504.04471v1",
        "keywords": "type: Agent-based Systems, type: Model Improvement, temporal reasoning,chain of thought reasoning,task specific applications",
        "title": "VideoAgent2: Enhancing the LLM-Based Agent System for Long-Form Video Understanding by Uncertainty-Aware CoT",
        "type": "article",
        "url": "https://arxiv.org/pdf/2504.04471.pdf",
        "year": "2024"
    },
    "Zhu2023": {
        "abstract": "This paper introduces MiniGPT-4, an efficient vision-language model that aligns a frozen visual encoder with a large language model through a lightweight projection layer. By emphasizing quality over quantity in instruction data, the model achieves GPT-4-like multimodal capabilities with open-source components, demonstrating comparable performance on diverse tasks including detailed image descriptions, creative writing, complex reasoning, and multi-turn conversations.",
        "author": "Zhu, D. and Chen, J. and Shen, X. and Li, X. and Elhoseiny, M.",
        "journal": "arXiv preprint arXiv:2304.10592",
        "keywords": "type: Instruction-tuned Multimodal, type: Model Improvement, parameter efficient training,open source,Data Curation Techniques,multimodal conversation",
        "title": "MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models",
        "type": "article",
        "url": "https://arxiv.org/pdf/2304.10592.pdf",
        "year": "2023"
    },
    "Zhuang2024": {
        "abstract": "This work provides a critical analysis of visual processing limitations in multimodal large language models (MLLMs), presenting a taxonomy of visual shortcomings and conducting systematic evaluation through diagnostic tests. The authors identify significant weaknesses in spatial reasoning, counting abilities, fine-grained recognition, and other visual skills beyond basic object recognition, offering insights into how CLIP-like feature representations constrain comprehensive visual understanding despite strong language capabilities.",
        "author": "Zhuang, C. and Chen, Y. and Pan, J. and Peng, Z. and Wu, Y. and Liu, Y. and Yu, Y. and Wu, Y. and Zheng, M. and Yuan, J.",
        "journal": "arXiv preprint arXiv:2401.06209",
        "keywords": "type: Evaluation/Analysis, type: Instruction-tuned Multimodal, perceptual capabilities,spatial understanding,task specific applications",
        "title": "Eyes Wide Shut? Exploring the Visual Shortcomings of Multimodal LLMs",
        "type": "article",
        "url": "https://arxiv.org/pdf/2401.06209.pdf",
        "year": "2024"
    }
}});