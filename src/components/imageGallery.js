import { useState } from "react"


const App = (props) => {
    const firstImage = props.images[0];

    const [selectedImage, setSelectedImage] = useState(firstImage)

    return (
        <div>
            <div>
                <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '300px' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '10px', overflowX: "scroll" }}>
                {props.images.map((image, index) => (
                    <img
                        style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
                        key={index}
                        src={image}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>

        </div>
    )
}
export default App