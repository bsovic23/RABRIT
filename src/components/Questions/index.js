import React from 'react';

function Questions() {
    return(
        <section class="questions">
            <h2>Submit a question or application error below:</h2>
            <form>
                <div>
                    <label htmlFor="email">What is your Email:</label>
                    <input type="email" name="email" />
                </div>

                <div>
                    <label htmlFor="error">Error</label>
                    <input type="radio" name="error" />

                    <label htmlFor="question">Question</label>
                    <input type="radio" name="question" />
                </div>

                <div>
                    <label htmlFor="comment">Comment/Error:</label>
                    <textarea rows="7" name="comment"/>
                </div>

                <button type="submit">SUBMIT</button>
            </form>
        </section>
    )
};

export default Questions;