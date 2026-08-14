import "./Category.css";
function Category(){
    return(<>
        <div className='main-div'>
        <div className='Staff-category'>
            <h5>कर्मचारी श्रेणी</h5>
            <a href="#">सबै →</a>
            <p>जनप्रतिनिधि</p><span>5</span>
            <p>कर्मचारी</p><span>9</span>
            <p>स्वास्थ्य</p><span>6</span>
            <p>अन्य</p><span>4</span>
        </div>
        <div className='Location-category'>
              <h5>स्थान श्रेणी</h5>
            <a href="#">सबै →</a>
            <p>Religious Places</p><span>4</span>
            <p>Heritage Sites</p><span>3</span>
            <p>Parks</p><span>2</span>
        </div>
        <div className='Business-category'>
              <h5>व्यवसाय श्रेणी</h5>
            <a href="#">सबै →</a>
            <p>Finance</p><span>4</span>
            <p>Information Technology</p><span>6</span>
            <p>Educational Institutes</p><span>5</span>
            <p>Restaurants & Food</p><span>8</span>
            <p>Retail</p><span>7</span>
        </div>
        </div>
    </>);
}

export default Category;