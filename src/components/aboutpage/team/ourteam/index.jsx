'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Priyashri Batabyal ",
        description: "Convenor",
        speed: 0.5
    },
    {
        title: "Snehangsu Manik",
        description: "Joint Convenor",
        speed: 0.5
    },
    {
        title: "Satyam Bera",
        description: "Finace",
        speed: 0.67
    },
    {
        title: "Arka Karmakar",
        description: "Student Co-ordinator",
        speed: 0.8
    },
    {
        title: "Shubhajit Sarkar ",
        description: "Student Co-ordinator",
        speed: 0.8
    },
    {
        title: "Ankita Ghosh ",
        description: "Student Co-ordinator",
        speed: 0.8
    },
    {
        title: "Sk Akash Ali",
        description: "SPOC",
        speed: 0.8
    },
    {
        title: "Dia Nandy",
        description: "Designer",
        speed: 0.8
    },
    {
        title: "Sumana Maity",
        description: "Designer",
        speed: 0.8
    },
    {
        title: "Sneha Jana",
        description: "Decoration",
        speed: 0.8
    },
    {
        title: "Arghyadeep Maiti ",
        description: "Tech Team",
        speed: 0.8
    },
    {
        title: "Paramita Dolui",
        description: "Marketing Team",
        speed: 0.8
    },
    {
        title: "Rania Roy",
        description: "Marketing Team",
        speed: 0.8
    },
    {
        title: "Ambar",
        description: "Marketing Team",
        speed: 0.8
    },
    {
        title: "Soumyajit Saren",
        description: "Food",
        speed: 0.8
    },
    {
        title: "Shakir Ahmed",
        description: "Food",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

