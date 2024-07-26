import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      name: 'Subbarao Kambhampati',
      position: 'Professor',
      institute: 'Arizona State University',
      img: 'assets/speakers/subbarao-kambhampati.png',
      url: 'https://rakaposhi.eas.asu.edu',
      talk_title: "Can LLMs Reason and Plan?",
      talk_abstract: "Large Language Models (LLMs) are on track to reverse what seemed like an inexorable shift of AI from explicit to tacit knowledge tasks. Trained as they are on everything ever written on the web, LLMs exhibit 'approximate omniscience'--they can provide answers to all sorts of queries, but with nary a guarantee. This could herald a new era for knowledge-based AI systems--with LLMs taking the role of (blowhard?) experts. But first, we have to stop confusing the impressive form of the generated knowledge for correct content, and resist the temptation to ascribe reasoning, planning, self-critiquing etc. powers to approximate retrieval by these n-gram models on steroids. We have to focus instead on LLM-Modulo techniques that complement the unfettered idea generation of LLMs with careful vetting by model-based AI systems. In this talk, I will reify this vision and attendant caveats in the context of the role of LLMs in planning tasks."
    },
    {
      name: 'Antoine Bosselut',
      position: 'Assistant Professor',
      institute: 'EPFL',
      img: 'assets/speakers/antoine-bosselut.png',
      url: 'https://atcbosselut.github.io',
      talk_title: "Identifying and Exploiting Pseudo-cognitive Processes in Large Language Models",
      talk_abstract: "Large language models display remarkable abilities, matching or exceeding humans in many tasks and activities typically associated with higher-order cognition. Despite these successes, they also fail dramatically when presented with certain seemingly simple problems. In this talk, I'll discuss similarities and differences in how LLMs and humans perform certain cognitive tasks. First, I will present a method for discovering sparse computational subgraphs that LLMs use to express knowledge, similar to how humans recall memories. Then, I will describe how LLMs fall short of human cognitive processes for reasoning and learning, and present a new algorithm motivated by cognitive development theory, RECKONING, that dynamically learns to encode new knowledge at inference time for robust reasoning. I'll conclude with reflections on developing reasoning algorithms inspired by human cognition."
    },
    {
      name: 'Chelsea Finn',
      position: 'Assistant Professor',
      institute: 'Stanford University',
      img: 'assets/speakers/chelsea-finn.jpg',
      url: 'https://ai.stanford.edu/~cbfinn/',
      talk_title: "TBA",
      talk_abstract: "TBA"
    },
    {
      name: 'Ethan Wilcox',
      position: 'Postdoctoral Fellow',
      institute: 'ETH Zurich',
      img: 'assets/speakers/ethan-wilcox.png',
      url: 'https://wilcoxeg.github.io',
      talk_title: "Language Modeling in People and Machines",
      talk_abstract: "Decades of scientific research has revealed that humans are sensitive to the statistical regularities of linguistic inputs (Saffran et al., 1996; Smith and Levy, 2013), implying that they learn and compute probabilities over the strings of their language. In this talk, I ask how close are contemporary LLMs to the human language model? In the first half, I focus on language processing and discuss the relationship between LLMs’ outputs and reading times of individual words. I show that models’ surprisal values (i.e., negative log probabilities) are well-correlated to human word-by-word reading times across languages, but that this correlation breaks down when people read ungrammatical texts. In the second half, I turn to language acquisition. I discuss the results of the BabyLM challenge, an ongoing shared task that asks participants to train an LM on 100 million words or less, roughly the amount of linguistic experience available to a typical child. Although scaled-down models achieve impressive performance at learning the structure of language, they fall short of human-level competence. I conclude by identifying future opportunities and challenges for cognitive modeling with LLMs."
    },
    {
      name: 'Melanie Mitchell',
      position: 'Professor',
      institute: ' Santa Fe Institute',
      img: 'assets/speakers/melanie-mitchel.png',
      url: 'https://melaniemitchell.me',
      talk_title: "Evaluating the Robustness of LLMs on Abstract Reasoning and Analogy",
      talk_abstract: "TBA"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
