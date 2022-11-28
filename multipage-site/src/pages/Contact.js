import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptatum distinctio temporibus tempora incidunt error ea, 
            libero perspiciatis tempore suscipit beatae officia dolorem et 
            nostrum ducimus veritatis eligendi fugit consectetur non!
        </p>
    </div>
  )
}
