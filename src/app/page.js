'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe, Award, BookOpen, Code, Cpu, Server, Terminal } from 'lucide-react';
import pic from '../assets/profile.png';
import ntulogo from '../assets/NTU.png';
import astarlogo from '../assets/astar.jpeg';
import nscclogo from '../assets/nscc.jpeg';
// import mpilogo from '../assets/mpilogo.png';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [terminalText, setTerminalText] = useState('');

  const publications = [
    {
      title: "VBench: Comprehensive Benchmark Suite for Video Generative Models",
      authors: "Huang Z., He Y., Yu J., Zhang F., Si C., Jiang Y., Zhang Y., Wu T., Jin Q., Chanpaisit N., et al.",
      venue: "CVPR 2024",
      links: { github: "https://github.com/Vchitect/VBench" }
    },
    {
      title: "Evaluating Code-Switching Translation with Large Language Models",
      authors: "Huzaifah, M., Weihua, Z., Chanpaisit, N., & Kui, W.",
      venue: "LREC-COLING 2024",
      links: {}
    },
    {
      title: "Parallel Curve Detection Method based on Hough Transform",
      authors: "Chanpaisit, N., & Vatiwutipong, P.",
      venue: "Thai Journal of Mathematics, TJCDCG3 2021",
      links: {}
    }
  ];

  const research = [
    {
      title: "Reserch Intern",
      org: "Max Planck Insitute for Software System (MPI-SWS)",
      period: "Aug 2026 - Present",
      tech: [""]
    },
    {
      title: "HPC Research Intern",
      org: "National Supercomputing Centre Singapore",
      period: "June 2025 - Present",
      points: [
        "ML benchmark suites on 40-node NVIDIA DGX H100 supercomputer (LLAMA-8B/70B, Mixtral-8x22B, OpenCLIP)",
        "Job classification pipeline: dynamic library analysis, system metrics correlation (CPU/IO/GPU tensor cores)",
        "Custom GPU monitoring via NVIDIA NVML library"
      ],
      tech: ["C++", "PyTorch", "CUDA", "vLLM", "Bash"]
    },
    {
      title: "Undergraduate Research",
      org: "Nanyang Technological University",
      period: "Aug 2023 - Present",
      points: [
        "GPU-based event synchronization in parallel discrete event simulation",
        "Maintains VBench (>1.1K stars) - video generation benchmark suite",
        "3D reconstruction pipeline for large-scale indoor scenes from egocentric video"
      ],
      tech: ["C++", "CUDA", "Python"]
    },
    {
      title: "Research Intern",
      org: "Institute for Infocomm Research (A*STAR)",
      period: "May 2023 - Aug 2023",
      points: [
        "LLM prompt engineering: in-context learning, chain-of-thought",
        "Positional encodings implementation: RoPE, ALiBi, Scaled-RoPE",
        "Length generalization in document-level translation"
      ],
      tech: ["Python", "Fairseq"]
    }
  ];

  const industry = [
    {
      title: "Robotics Software Engineer Intern",
      org: "Hyundai Motor Group Innovation Center",
      period: "Dec 2024 - May 2025",
      points: [
        "IPC wrapper: Python-C++ via memory-mapped files",
        "Tracy instrumentation profiler integration for 3D reconstruction pipeline",
        "Sparse voxel TSDF algorithms for large-scale scenes",
        "Gaussian splatting techniques for scene reconstruction"
      ],
      tech: ["C++", "Python", "Numba", "Open3D"]
    },
    {
      title: "Data Platform Engineering Intern",
      org: "Agoda.com",
      period: "May 2024 - Aug 2024",
      points: [
        "S3-Filesystem adapter with 2.4x/4.2x latency optimization (Go routine worker pool)",
        "HDFS data retention service (40%+ BI team adoption)",
        "K8s deployment with audit/monitoring infrastructure"
      ],
      tech: ["Go", "Kubernetes", "ReactJS"]
    }
  ];

  const competitions = [
    {
      event: "ISC24",
      result: "3rd Place",
      award: null
    },
    {
      event: "SC24",
      result: null,
      award: "Highest Linpack Award"
    },
    {
      event: "APAC HPC-AI 2023",
      result: "2nd Place",
      award: "HPC Special Prize"
    }
  ];

  const Section = ({ id, title, icon: Icon, children }) => (
    <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-950">
        <Icon className="w-6 h-6 text-gray-950" />
        <h2 className="text-2xl font-mono font-bold text-gray-950 uppercase tracking-wider">
          [{title}]
        </h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-100 text-gray-950 font-mono relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Terminal Header */}
        <div className="grid sm:grid-cols-1 md:grid-cols-4 mb-2 border-2 border-dashed border-gray-300 bg-stone-100 p-6">
          <div >
            <img className="h-32 w-32 object-fit" src={pic.src} />
          </div>
          <div className="col-span-3">
            <div className="gap-8 mt-0 mb-2">
              <div>
                <h1 className="text-2xl font-bold mb-2 text-gray-950">
                  Nattapol Chanpaisit
                </h1>
                Undergrad @ NTU, Singapore
              </div>
            </div>
              
            <div className="grid mt-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
              <a className="flex items-center gap-2 hover:text-cyan-850 transition-colors">
                <Mail className="w-4 h-4" />
                <span>nattapol001[at]e.ntu.edu.sg</span>
              </a>
              <a href="https://nattapolchan.github.io/me" className="flex items-center gap-2 hover:text-cyan-850 transition-colors">
                <Globe className="w-4 h-4" />
                <span>nattapolchan.github.io/me</span>
              </a>
              <a href="https://github.com/NattapolChan" className="flex items-center gap-2 hover:text-cyan-850 transition-colors">
                <Github className="w-4 h-4" />
                <span>github.com/NattapolChan</span>
              </a>
              <a href="https://linkedin.com/in/nattapol-chan" className="flex items-center gap-2 hover:text-cyan-850 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/nattapol-chan</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xl gap-2">
          About
          <div className="text-sm">I&apos;m a final year undergraduate student at Nanyang Technological University. My final year research project on Discrete-event Simulation on GPU is advised by Prof. Cai Wentong.</div>
          <div className="text-sm">I am a member of Supercomputing team at NTU <a href="https://ntuhpc.org/" className="text-blue-500 underline font-bold">(NTUHPC)</a>. I was fortunate to be part of student cluster competition at SC and ISC, mostly because I got to learn so much from incredibly driven and talented friends who challenged and inspired me. My research interests include system for ML, high-performance computing, and simulation.</div>
          <div className="text-sm">I will be joining MPI in Saarbrücken as a research intern this summer.</div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-gray-950 pt-6" />

        <div className="text-xl">
          Education
          <div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
            <img className="h-24 w-18 object-scale-down" src={ntulogo.src} />
            <div className="col-span-2 col-start-2 md:col-span-7 text-base">
              <div className="grid-cols-1">
                <div className="font-bold">🐯🐯🐯 Nanyang Technological University, Singapore</div>
                <div className="text-sm">
                  <div>Sep 2022 - May 2026 (expected honours: Highest Distinction)</div>
                  <div>B.Eng. in Computer Engineering</div>
                  <div>Coursework: GPU Programming, Parallel Computing, Computer Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-gray-950 pt-6" />

        <div className="text-xl">
          Awards
          <div className="grid-cols-1">
            <div className="text-sm">Highest Linpack Award, Student Cluster Competition @ SC 24</div>
            <div className="text-sm">3rd place, Student Cluster Competition @ ISC 24</div>
            <div className="text-sm">Dean&apos;s List, 2023</div>
            <div className="text-sm">ASEAN Undergraduate Scholarship, 2022</div>
            <div className="text-sm">Silver Medal, International Physics Olympiad, 2022</div>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-gray-950 pt-6" />

        <div className="text-xl">
          Experience 
        {/*<div className="mt-4 grid grid-cols-8">
           <img className="h-24 w-24" src={mpilogo.src} />
           <div className="col-span-7 text-base">
             <div className="grid-cols-1">
               <div className="font-bold">Max Planck Institute for Software System (MPI-SWS)</div>
               <div className="text-sm">
                 <div>Aug 2026 - Feb 2027</div>
                 <div>Research Intern</div>
               </div>
             </div>
           </div>
         </div>*/}

          <div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
            <img className="h-24 w-24 object-scale-down" src={nscclogo.src} />
            <div className="col-span-2 col-start-2 md:col-span-7 text-base">
              <div className="grid-cols-1">
                <div className="font-bold">National Supercomputing Centre Singapore</div>
                <div className="text-sm">
                  <div>Jun 2025 - Dec 2025</div>
                  <div>HPC performance Intern</div>
                  <div>Benchmarked various ML workloads and investigated system issue for the performance drop</div>
                  <div>Developed workload classification pipeline using job scripts and system monitoring metrics</div>
                </div>
              </div>
            </div>
          </div>

    {/*<div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
            <img className="h-24 w-18 ml-2 object-scale-down" src={ntulogo.src} />
            <div className="col-span-2 col-start-2 md:col-span-7 text-base">
              <div className="grid-cols-1">
                <div className="font-bold">NTU</div>
                <div className="text-sm">
                  <div>Sep 2023 - Mar 2024</div>
                  <div>URECA Research Programme</div>
                  <div>Maintained and contributed to a video generation benchmark paper VBench (CVPR 2024)</div>
                </div>
              </div>
            </div>
          </div>*/}

          <div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
            <img className="h-22 w-20 object-scale-down" src={astarlogo.src} />
            <div className="col-span-2 col-start-2 md:col-span-7 text-base">
              <div className="grid-cols-1">
                <div className="font-bold">Institute for Infocomm Research (I2R), A*STAR</div>
                <div className="text-sm">
                  <div>May 2023 - Aug 2023</div>
                  <div>Research Intern</div>
                  <div>Investigated LLM ability in code-switched text translation (LREC-COLING 2024)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
