import Button from "../Buttons/Button";

const Buttons = () => {
    return (
        <div className="place-self-end flex gap-2">
            <Button className="bg-blue-100 hover:bg-blue-200 text-blue-600 focus:outline-blue-400 dark:bg-[rgba(0,123,255,0.25)] dark:hover:bg-[rgba(0,123,255,0.35)] dark:text-blue-400 dark:focus:outline-[rgba(0,123,255,0.6)]">
                Login
            </Button>
            <Button>Sign Up</Button>
        </div>
    );
};

export default Buttons;
