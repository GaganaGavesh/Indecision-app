const app = {
    title: 'Indecisoion app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {//event deteils tyna object ekak return wenawa onSubmit ekedi
    e.preventDefault();//stop the full page reload
    console.log('form submitted');

    const option = e.target.elements.option.value;//event eken ena form eke option kiyana eke value eka aragena tynawa
    //target means the form and there is a list of targets that can be caught by the name

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const clearOptions = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}


//<form onSubmit={onFormSubmit}></form>// just reference the function do not{onFormSubmit(e)} call it if you call it it gives the return value to {}


const appRoot = document.getElementById('app');

const numbers = [1, 2, 3, 5]


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do ?</button>

            <button onClick={clearOptions}>Remove All</button>

            {
                // [<p key="11"></p>, <p key="12"></p>, <p key="14"></p>]
            }

            {
                // numbers.map((number)=> {
                //     return <p key={number}>Numbet: {number}</p>;
                // })
            }

            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();