
const Message = ({message}) => {
    return (
        <div className='relative toast'>
            <div className='bg-red-400 fixed bottom-0 h-32 right-0 w-80 rounded-lg'>
                <h2 className='ml-3'> Course Registration</h2>
                <p className='ml-3 text-wrap'>{message}</p>
            </div>
        </div>
    );
};

export default Message;