import { useState } from "react";

export const Contact = ()=>{
    const[name, setName] = useState(null);
    const[email, setEmail] = useState(null);
    const[message, setMessage] = useState(null);

    const handleSubmit = () => {
        
    }
    return (
        <div className="my-14 min-h-[calc(100vh-14rem)] pt-4">
            <div className="mx-auto">
                <h1 className="text-3xl font-bold text-red-600 text-center">Get in touch</h1>
                <div className="w-[300px] mx-auto">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                className="p-3 rounded-lg border-2 border-gray-400"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                className="p-3 rounded-lg border-2 border-gray-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Message</label>
                            <textarea
                                rows={5}
                                className="p-3 rounded-lg border-2 border-gray-400"
                                placeholder="Write your message here..."
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between">
                            <button type="submit" className="p-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all duration-200">Submit</button>
                            <button type="reset" className="p-3 bg-gray-400 text-gray-800 font-bold rounded-xl hover:bg-gray-500 transition-all duration-200 text-white">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}