import React from 'react';

type TodolistPropsType = {
    // task: Array<taskType>
    task: taskType[]
}

type taskType = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <div>

                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.task.map( (el) => {
                        return <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    })}
       {/*             <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>*/}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}
