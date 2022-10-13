import "./style.css";

function PartnerComp() {

    const imgList = [
        { img : "https://tamadoge.io/wp-content/uploads/2022/09/Mask-Group-14.svg" },
        { img : "https://tamadoge.io/wp-content/uploads/2022/09/Mask-Group-15.png" },
        { img : "https://tamadoge.io/wp-content/uploads/2022/09/Mask-Group-17.png" },
        { img : "https://tamadoge.io/wp-content/uploads/2022/09/3rh284_w.png" }
    ]

    return (
        <>
            <div className="container text-center mt-5">
                <div className="row mb-5">
                    <div className="col">
                        <h1 className="bs-font-SimranITC display-1 bs-featured-heading">Partner With</h1>
                    </div>
                </div>
                <div className="row mb-5">
                    {
                        imgList.map((item) => {
                            return(
                                <div className="col-lg-3">
                                    <img src={item.img} alt="" style={{ width: '100%' }} className="my-5" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PartnerComp;