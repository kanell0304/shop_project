const ProductListComponent = () =>{
    return(
        <div className="myPageComponent">
            <h2 className="papgeTitle">분류</h2>
            <div className="pageContainer">
                <div className="borderSection">
                    <strong>등록된 상품 갯수 : 10</strong>
                    <div className='inputWrap'>
                        <div className="inputBox">
                            <input name=""
                            // value={form.categoryName}
                            // onChange={handleChange}
                            placeholder="검색어를 입력해주세요."
                            type="text"
                            />
                            <button type="button">검색</button>
                        </div>
                    </div>
                    <div className='inputWrap'>
                        <div className="inputBox">
                            <input name=""
                            // value={form.categoryName}
                            // onChange={handleChange}
                            placeholder="시작일"
                            type="text"
                            />
                            ~
                            <input name=""
                            // value={form.categoryName}
                            // onChange={handleChange}
                            placeholder="종료일"
                            type="text"
                            />
                            <button type="button">검색</button>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <button type="button">높은판매순</button>
                            <button type="button">낮은판매순</button>
                        </div>

                        <div>
                            <button type="button">높은별점순</button>
                            <button type="button">낮은별점순</button>
                        </div>

                        <div>
                            <button type="button">높은가격순</button>
                            <button type="button">낮은가격순</button>
                        </div>

                        <div>
                            <button type="button">삭제상품</button>
                            <button type="button">정상상품</button>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductListComponent;