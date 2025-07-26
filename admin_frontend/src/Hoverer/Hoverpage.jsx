import { Link } from "react-router-dom"
const Hoverpage = () => {
  return (
<>
<section>
    <div>
        <div className="Dashboard"><Link to="/">DashBoard</Link></div>
        <div className="Addproduct"><Link to="/addproduct">AddProduct</Link></div>
    </div>
</section>
</>
  )
}

export default Hoverpage
