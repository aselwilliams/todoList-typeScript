import React from 'react';
import {ITask} from '../Interfaces';

interface Props {
    task:ITask;
}

const SingleTask = ({task}: Props) => {
    return (
        <div className='task'>
            <div className="content">
                <span>{task.taskName}</span>
                <span className='deadline'>{task.deadline}</span>
            </div>
            <button>X</button>
        </div>
    )
}
export default SingleTask