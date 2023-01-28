export function checkErrorForm(error){
    const errorMsg = {
        text: 'This field is required!',
        styleText: {
            color: 'rgb(239, 68, 68)',
            fontSize: '10.5px',
            lineHeight: '12px',
            display: error ? 'block' : 'none',
        },
        styleTextBox: function(property){
            return !property ? { borderColor: error && 'rgb(239, 68, 68)' } : {}
        }
    }
    
    return { errorMsg }
}