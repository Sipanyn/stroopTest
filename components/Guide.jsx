import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { guideCloser } from "../src/StateSlice";
function Guide() {
    const guide=useSelector((state)=>state.question.guide)
    const dispatch=useDispatch()
    return (
        <>
            {guide === "opened" ? (
                <div className="p-4 bg-white flex flex-col rounded-md gap-2 max-w-[500px]">
                    <p className="text-right">
                        نام این بازی تست استروپ است؛ در این بازی، باید رنگ متن را با رنگ واقعی کلمه مطابقت دهید. برای مثال، اگر کلمه "قرمز" با رنگ آبی نمایش داده شود، باید بر روی دکمه "آبی" کلیک کنید.
                        در این بازی مهارت‌های شناختی و تمرکز مورد ارزیابی قرار می‌گیرد و قدرت مغز به چالش کشیده می‌شود؛ انجام روزانه این بازی می‌تواند به بهبود عملکرد شناختی مغز کمک کند و در پیشگیری از بیماری‌های مغزی موثر باشد
                    </p>
                    <button onClick={()=>dispatch(guideCloser())} className="bg-rose-200 hover:bg-rose-100 p-2 rounded-md cursor-pointer">بستن</button>
                </div>
            ) : null}
        </>
    )
}

export default Guide
