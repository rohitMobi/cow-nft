import "./style.css";
import AboutUsSide from "../../Assets/Images/AboutUsBgRemove.png";

function AboutComp() {
    return (
        <>
            <div class="container text-center mt-5" style={{ padding: "10rem 0" }}>
                <div class="row mb-5">
                    <div class="col">
                        <h1 className="bs-font-SimranITC bs-about-heading">About Us</h1>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col text-start">
                        <h1 class="mb-5">
                            The newest Cow on the block
                        </h1>
                        <h6 class="bs-font-OpenSans bs-about-para-1">
                            Tamadoge is coming out the gate barking, becoming one of the biggest hyped meme coins of all time and pushing the boundaries of the Play-to-Earn space, in order to provide a game that people will be climbing over each other to use.
                            <br /><br />
                            Tamadoge (TAMA) is the gateway token of the Tamaverse - where you'll be able to mint, breed and battle your own Tamadoge pet in the metaverse.
                            <br /><br />
                            Tamadoge will give everyone the ability to mint the doges they want to, and will allow users to breed, train and battle their Tamadoge NFTs to top the leaderboard every single month. Over time the Play-to-Earn opportunities will be expanding to include augmented reality experiences, allowing your NFT to play with its friends in the Tamaverse.
                            <br /><br />
                            Tamadoge isn’t just the future of the Doge ecosystem, it’s the future of Play-to-Earn
                        </h6>
                    </div>
                    <div class="col text-center">
                        <div>
                            <img class="bs-about-img" src={AboutUsSide} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutComp;