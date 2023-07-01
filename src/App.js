import './App.css';
import Cart from './Components/Cart/Cart';
import React, { useState} from 'react';

const product = [{
  name : "Bat",
  price : "5400.00",
  img : "https://commercebuild-175c7.kxcdn.com/cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/2A23138C/thumbnail/big_2A23138-Kahuna-Lite-Shadow.jpg?quality=65g",
  sale : true,
  added : false
},
{
  name : "Ball",
price : "2300.00",
img : "https://assets.gqindia.com/photos/642a7596bbd5d6aa01c70d1f/1:1/w_1080,h_1080,c_limit/Cricket%20Ball.jpg",
sale : true,
added : false
},
{
  name : "Stumps",
price : "3500.00",
img : "https://sportsmatik.com/uploads/matik-sports-corner/equipage/cricket-stumps_1599117233.jpg",
sale : true,
added : false
},
{
  name : "Helmet",
price : "1200.00",
img : "https://cdn.shopify.com/s/files/1/0641/2366/6646/products/helmetgravity1.png?v=1669492711",
sale : false,
added : false
},
{
  name : "Bails",
price : "600.00",
img : "https://media.istockphoto.com/id/1412175106/photo/the-sound-and-sight-of-seeing-a-cricket-ball-hitting-the-bails-makes-cricket-so-exciting.jpg?s=612x612&w=0&k=20&c=V_tQO_cye4adlY-WbtwiIMZ7Rbb-7rbjmeHR2kH5Fkw=",
sale : false,
added : false
},
{
  name : "Gloves",
price : "900.00",
img : "https://gmcricket.in/media/catalog/product/cache/757ea7d2b7282843694bdb6de7a23598/3/0/303-batting-gloves_4.jpg",
sale : true,
added : false
},
{
  name : "Pad",
price : "1350.00",
img : "https://cdn.shopify.com/s/files/1/0549/4518/5838/products/TESTBLUE.jpg?v=1662790367",
sale : true,
added : false
},
{
  name : "Jersey",
price : "4500.00",
img : "https://5.imimg.com/data5/ANDROID/Default/2022/6/GC/PA/SL/22964772/product-jpeg-500x500.jpg",
sale : true,
added : false
}
];

function App() {

  const [count,setCount] = useState(0);

  const handleClick = (e) => {
      if(e.target.innerHTML === 'Add to Cart'){
            setCount(count+1);
            e.target.innerHTML = "Remove From Cart";
            e.target.className = "btn btn-outline-danger";

      }
      else if(e.target.innerHTML === 'Remove From Cart')
      {
            setCount(count-1);
            e.target.innerHTML = "Add to Cart";
            e.target.className = "btn btn-outline-success";
      }
}


  return (
    <div className="App">
    <div className="stat">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <img width={50} height={50
          } className='me-1' src='https://images.vexels.com/media/users/3/240076/isolated/preview/0e6c0d8799dc06d116bd376820a6b091-cricket-bat-player-cut-out.png' alt='icon'/>
            <a className="navbar-brand" href="#!">CricShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">All Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-dark d-flex align-items-center" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="19" 
                    height="19" 
                    fill="currentColor" 
                    className="bi bi-cart-fill me-1" 
                    viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    </div>

    <header className="sach py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Cricket Paradise</h1>
                <p className="lead fw-normal text-white-70 mb-0">No.1 Sports Brand</p>
            </div>
        </div>
    </header>
   
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {product.map((d, i) => (
          <Cart
          handleClick={handleClick}
            data={d}
            key={`${i}`}
          />
        ))}
      

      </div>
            </div>
        </section>
      
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;


