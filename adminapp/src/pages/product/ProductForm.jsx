import { useState } from "react";

export default function ProductForm(){
    const [files, setFiles]=useState([]); //업로드 할 대상 배열 
    const [previews, setPreviews]=useState([]); //미리보기 할 대상 배열 
    
    //const [numbers, setNumbers]  =useState([1,2]);
    //setNumbers((prev)=>[ ...prev, 3]);

    //이전과 동일한 파일을 선택할 경우, 이벤트는 발생하지 않음    
    const handleFileChange=(e)=>{
        console.log("파일변경 이벤트 정보는 ", e);
        //사용자가 선택한 이미지들을 얻어와서, previews 배열에 반영시키자!
        //e.target.files 에는 선택한 이미지들이 유사배열 형태로 들어있다..FileList 라는 유사배열은 
        // readOnly 이므로, 수정이 불가능하다..따라서 삭제할 수 없다.. 
        //대안?  일반 배열을 선언하여 유사배열안의 요소들을 복사해놓기 
        const selectedFiles=Array.from(e.target.files);    //매개변수로 지정된 배열의 요소를 하나씩 접근하여, 새로운 배열 반환
        console.log("selectedFiles=", selectedFiles);

        
        //setFiles(미리보았던배열+지금추가로선택한배열);        
        setFiles((prev)=>[...previews, ...selectedFiles]);
      
        //이미지가 아닌것을 제외...
        //filter() 메서드(선언적 메서드)로써, 화살표함수에서 호출된 로직에 맞는 
        //새로운 배열을 반환 
        const newPreviews=selectedFiles
            .filter((file)=>file.type.startsWith("image/"))//새로운배열탄생
            .map((file)=>({
                name:file.name,  //alt 에 대입할 용도
                url:URL.createObjectURL(file)  //src에 대입할 용도
            })); //어떤 요소로 채울지 결정
        //합쳐진 배열수만큼 화면에 출력 
        //setPreviews(()=>[기존의미리보기배열 , 새롭게 합쳐진배열]);
        setPreviews((prev)=>[...prev, ...newPreviews]);
    }

    //미리보기 이미지 삭제 
    //name 매개변수는 삭제할 이미지명
    /*
        5=="5"  //true  (느슨 loose 비교)
        5==="5" //false (엄격 strict 비교)
    */
    const removePreview=(name)=>{
        //filter의 목적? 새로운 배열반환(삭제 대상이 되는 요소만 빼고서, 나머지요소들로 채우겠음)
        setPreviews((prev)=> prev.filter( (p)=>p.name !== name ));      
       
        //미리보기와 업로드 할 이미지를 동기화 
        setFiles((prev)=> prev.filter( (f)=>f.name !==name ));  
    }   

    /*서버에 파일 업로드 */
    const upload=async ()=>{
        await axios.post("");     

    }

    return (
    <div className="card-body">
        <div className="form-group">
            <select className="form-control" name="topcategory_id" >
                <option value="">상위 카테고리 선택</option>        
            </select>
        </div>
        <div className="form-group">                       
            <select className="form-control" name="subcategory_id" >
                <option value="">하위 카테고리 선택</option>        
            </select>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" name="product_name" placeholder="상품명"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" name="brand" placeholder="브랜드"/>
        </div>
        <div className="form-group">
            <input type="number" className="form-control" name="brand" placeholder="가격"/>
        </div>
        <div className="form-group">
            <input type="number" className="form-control" name="brand" placeholder="할인가"/>
        </div>
        <div className="form-group">
            <textarea className="form-control" name="detail" placeholder="상세설명"></textarea>
        </div>

        <div className="form-group">
            <label for="exampleInputFile">상품 이미지를 등록하세요</label>
        <div className="input-group">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="exampleInputFile" multiple onChange={handleFileChange}/>
                <label className="custom-file-label" for="exampleInputFile">Choose file</label>
            </div>
                <div className="input-group-append">
                <span className="input-group-text">Upload</span>
            </div>
        </div>
        {/* 이미지 미리보기 영역 */}
        <div style={{display:"flex",gap:"10px", flexWrap:"wrap", marginTop:"15px"}}>
            {previews.map((p)=>(
                <div key={p.name} style={{position:"relative", display:"inline-block"}}>
                    <img src={p.url} alt={p.name} style={{width:"120px",height:"120px", objectFit:"cover",border:"1px solid #ccc",borderRadius:"5px"}}/>
                    <button style={{position:"absolute",top:"0", right:"0",background:"red", color:"white",border:"none",borderRadius:"50%",cursor:"pointer",width:"20px",height:"20px",lineHeight:"18px",padding:"0px"}} onClick={()=> removePreview(p.name) }>X</button>
                </div>
               ))
            }
        </div>
        <div className="form-group">
            <button className="form-control" onClick={upload}>업로드</button>
        </div>
        </div>
    </div>
)
}