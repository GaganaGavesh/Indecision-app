//console.log('App.is is running');

//dan liyanne jsx kiyala ekakin tyna statement ekak.meka js and xml walin thama tynne.
//var template = methenta nikan boolean ekak string ekak onama samanya variable ekak wage ekak awoth eka jsx ekak wenne ne
var template = (
    <div>
        <h1>hatanatajdbgsjccbjsjhfjfbjvjsvj</h1>
        <p> sfffsfsf</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    </div>);//no dynamicvalues this is a static value.me widiyata tynakota meka render wenne
//samanya js widiyata,apata ona jsx ekak nisa eka e widiyata render karaganna pluwan hatiyakata api code eka liynnna ona.

// var template = React.createElement(
//     "h1",//html tag eka
//     {id: "someid"},//tag ekata dana id eka,key value paires widiyata
//     "Something New"//tag eka athule tynna ona tika
// )

const appObj = {
    title: 'hhhhhh',
    subttle: 'jgdjcjgdj',
    options: ['one', 'two']
}


const templatetwo = (
    <div>
        {appObj.title &&  <p>{appObj.title}</p>}
        {appObj.subttle && <p>{appObj.subttle}</p>}
        <p>{appObj.options.length > 0 ?  'here are the options' : 'no options'}</p>
    </div>)

// var userObj = {
//     name: 'gagana',
//     age: 14
// }//field wise danna ona

const userObj ={}

function getLocation(location) {
    if (location) {
        return <p>Location : {location}</p>;
    } else { 
        return undefined;
    }
}

const appRoot = document.getElementById('app');



//ReactDOM.render(templateThree, appRoot);//meka argument 2k gannawa,palaweni eka apita render karaganna ona jsx eka deka thama
                //api eka render karana thana,eka apata denna pluwan document api eke fetch walin aragena.(where u like to render it)
