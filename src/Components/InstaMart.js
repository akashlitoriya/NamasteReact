import { useState } from "react";
const Section = ({title, desc, isVisible, setVisible}) =>{
    
    return (
        <div className="bg-red-200 p-4 m-2">
            <h1>{title}</h1>
            {
                !isVisible ?
                (<button className="cursor-pointer rounded-full bg-red-400 pr-2 pl-2 pt-1 pb-1" onClick={() => setVisible(true)}>Show</button>
                )
                :
                (<button className="cursor-pointer rounded-full bg-red-400 pr-2 pl-2 pt-1 pb-1" onClick={() => setVisible(false)}>Hide</button>)
            }
            { isVisible && <p>{desc}</p>}
        </div>
    )
}
const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState();
    return (
        <div>
            <Section 
                title = {"About Instamart"} 
                desc = {"This is about section of instamart On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} 
                isVisible={visibleSection === "about"}
                setVisible={() => setVisibleSection("about")}
            />
            <Section 
                title = {"Team Section"} 
                desc = {"This is the team section of instamart. The team consist of 5000 members On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} 
                isVisible={visibleSection === "team"}
                setVisible={() => setVisibleSection("team")}
            />
            <Section 
                title = {"Career Section"} 
                desc = {"This is the team section of instamart. The team consist of 5000 members On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} 
                isVisible={visibleSection === "career"}
                setVisible={() => setVisibleSection("career")}
            />

        </div>
    )
}
export default InstaMart;