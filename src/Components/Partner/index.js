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
            <div class="container text-center mt-5">
                <div class="row mb-5">
                    <div class="col">
                        <h1 className="bs-font-SimranITC display-1 bs-featured-heading">Partner With</h1>
                    </div>
                </div>
                <div class="row mb-5">
                    {
                        imgList.map((item) => {
                            return(
                                <div class="col-lg-3">
                                    <img src={item.img} alt="" style={{ width: '100%' }} class="my-5" />
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