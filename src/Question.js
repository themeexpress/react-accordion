import { useState } from 'react'


// make a function and export it

const Question = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <section>
            <div className={ isOpen ? "open" : "closed"} >
                <h4>{ question.title }</h4>
                <button onClick={() => {setIsOpen(!isOpen)}}>{ isOpen ? "-" : "+" }</button>

            </div>
            {isOpen && <p>{ question.info} </p>}
        </section>
    );
}

export default Question;