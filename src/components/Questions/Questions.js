import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='Q-container'>
                <div className="all-question">
                <h1 className='head-text'>Frequently Ask Question</h1>
            <div>
                <h3 className='Ques'> Q=1: How dose  react work? </h3>
                <p className='p-text'>Ans:
                        React uses a declarative paradigm that makes it easier to reason about
                        your application and aims to be both efficient and flexible. It 
                        designs simple views for each state in your application, efficiently
                        update and render just the right component.React is without a doubt one 
                        of the most powerful and flexible frontend frameworks. But with its 
                        great power comes great responsibility - it's easy to misuse it and 
                        create a mess of an app. To avoid it, one needs to really understand how
                        React works internally by studying its code implementation and structure.
                        Coincidentally, it is also one of the best ways to learn React in general.
                        Working with a non-opinionated framework such as React gives you a lot of
                        freedom, but also introduces more room for mistakes.</p>
            </div>
            <div>
                <h3 className='Ques'> Q=2: What is the defferent of props and state? </h3>
                <p className='p-text'>Ans:
                        Props are used to pass data from one component to another. The state is a local 
                        data storage that is local to the component only and cannot be passed to other 
                        components.On the other hand, props and state are one of the most important topics
                        when learning React.  First, we refer to the state and props definitions, then 
                        look at two different types of components: stateful and stateless. People who are
                        in search of a fast answer can jump straight into a brief comparison  about the 
                        differences between state and props.Props are a JavaScript object that React 
                        components receive as an arbitrary input to produce a React element. They provide 
                        a data flow between the components.State is a JavaScript object which contains 
                        data that influence how the component looks at a certain point in time. The second
                        part is what makes the state different compared to props. State is just a snapshot 
                        of the app in a time. Every user interaction with your app may lead to changes in
                        the underlying state and in the whole UI as a result. State changes over the 
                        lifetime of a React component. </p>
            </div>


            <div>
                <h3 className='Ques'> Q=3: UseEffect API to load data other than What are the side effects of 
                            Useeffect in react? </h3>
                            
                <p className='p-text'>Ans:
                        useEffect() is for side-effects. A functional React component uses props and state
                        to calculate the output. If the functional component makes calculations that don't
                        target the output value, then these calculations are named side-effects 

                        Side Effect Runs After Every Render. The first is the default case.
                        Side Effect Runs Only Once After Initial Render.
                        Side Effect Runs After State Value Changes.
                        Side Effect Runs After Props Value Change.
                        Side Effect Runs After Props and State Value Change.
                        Side Effect Cleanup.
                        and run timer.
                        </p>
            </div>
                </div>
            
        </div>
    );
};

export default Questions;