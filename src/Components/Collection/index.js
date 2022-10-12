import "./style.css";
import NFTInsta from "../../Assets/Images/NFT-Insta.png";
import NFTCircleGlasses from "../../Assets/Images/NFT-Circle-Glasses.png";
import NFTDesign from "../../Assets/Images/NFT-Design.png";
import NFTHeadphone from "../../Assets/Images/NFT-Headphone.png";
import NFTHeartGlasses from "../../Assets/Images/NFT-Heart-Glasses.png";
import NFTSquareGlasses from "../../Assets/Images/NFT-Square-Glasses.png";
import NFTStyleGlasses from "../../Assets/Images/NFT-Style-Glasses.png";

function CollectionComp() {

    const nftList = [
        { name: "NFT Circle Glasses", img: NFTCircleGlasses },
        { name: "NFT Design", img: NFTDesign },
        { name: "NFT Head Phone", img: NFTHeadphone },
        { name: "NFT Heart Glasses", img: NFTHeartGlasses },
        { name: "NFT Square Glasses", img: NFTSquareGlasses },
        { name: "NFT Style Glasses", img: NFTStyleGlasses },
        { name: "NFT Insta", img: NFTInsta },
    ];

    return (
        <>
            <div class="container text-center mt-5">
                <div class="row mb-5">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start border-0" style={{ background: "transparent" }}>
                                <div class="bs-collection-circle-bg">
                                    <img class="bs-collection-img" src={NFTInsta} alt="" />
                                </div>
                                <div class="ms-2 me-auto">
                                    <h4 class="fw-bold mt-5">Instagram ACC</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row mb-5 mx-5">
                    {
                        nftList.map((item) => {
                            return(
                                <div class="col-lg-3 mt-3">
                                    <div class="card bs-collection-card" style={{ width: "100%" }}>
                                        <img src={item.img} class="card-img-top bs-collection-card-img-top" alt="..." />
                                        <div class="card-body bs-collection-card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                        </div>
                                    </div>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CollectionComp;