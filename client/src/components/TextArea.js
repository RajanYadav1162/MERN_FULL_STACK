const TextArea=({val, changeHandler})=>{
    return <div>
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
        >
            Message
        </label>
        <textarea placeholder="Message" className="w-full" value={val} onChange={(e)=>changeHandler(e.target.value)} />
    </div>
}
export default TextArea