interface ActionButtonProps{
    type?:'up'|'down'|'times';
    onClick?: () => {};
}
const ActionButton:React.FC<ActionButtonProps> = ({type,onClick}) => {
    
    const iconClass = type !== 'times' ? `fas fa-arrow-${type}` : `fas fa-${type}`
    return (
            <button className="button is-primary is-small" onClick={onClick}>
                <span className="icon">
                    <i className={iconClass}></i>
                </span>
            </button>
        )
};

export default ActionButton;