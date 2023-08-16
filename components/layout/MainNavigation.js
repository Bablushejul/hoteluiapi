import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {

//   async function apiHandler(){
//     const response = await fetch("https://www.google.com/url?q=https://www.figma.com/file/sROOFJK4MlkuWcDGkdXzaG/Hotel?type%3Ddesign%26node-id%3D0-1%26mode%3Ddesign%26t%3Dsi0GUlhb8LwXGtdd-0&source=gmail&ust=1688709435063000&usg=AOvVaw2kH1dxmKQqsVappXvcfMC0/hotel.json",{
//        method:"GET",
      
//        headers:{
//            "Content-Type":"application/json"
//        }
//     })

//     const data = await response.json()

//     console.log(data)
// }

  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/flight">flight</Link>
            </li>
            <li>
              <Link href="/hotel" >Hotel</Link>
            </li>
            
            <li>
              <Link href="/shop">shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
