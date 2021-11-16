const useCustomHooks = (setArrayFormField,formField,formPos,setPos) => {
    const appendForm = (e) => {
        e.preventDefault();
        setPos(formPos + 1);
        let createObj = {id:formPos + 1,form:formField};
        setArrayFormField((prev)=>{
            return [...prev,createObj]
        }); 
    }

    const deleteForm = (e,id) => {
        e.preventDefault();
        setArrayFormField((prev) => {
            return prev.filter(element => element.id !== id);
        })
    }

    return {appendForm,deleteForm}
}

export default useCustomHooks;
