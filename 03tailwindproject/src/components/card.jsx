function Card({username,title='Intro'}) {//yahan jo hamne argumemtnde vahan props aata hai and neeche jahan mujhe 
    //khud ka content chahiye vahan props.x krke de sakta hunin{} and yahan maine deconstruct kr diya ki seedha {}
    //ismain hi daaldiya inki value jab main.jsx main call krenge to username likhke dedenge and title=''vala default
    //hai ki if nhi diya to kya karenge.
    return (
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
              <img
                src="https://images.pexels.com/photos/30243611/pexels-photo-30243611/free-photo-of-cozy-minimalist-interior-with-beige-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {title}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                amet
              </p>
            </div></>
      );
}

export default Card;
//Props (short for "Properties") are arguments passed to components.
//Props make components dynamic by passing data from parent to child components.
//Props are read-only (immutable) and cannot be modified inside the child component.