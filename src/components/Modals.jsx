export function Modals(props){ 
    return(
        <div id="modal1" className="modal">
            <div className="modal-content content_opt">
                <h2>{props.name}</h2>
                <h4>{props.type}</h4>
                <h5>{props.year} year</h5>
                <div className="modals_opt">
                    <div className="left">
                        <img src={props.poster} alt={props.name} />
                    </div>
                    <div className="right">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Clear</a>
            </div>
        </div>
    )
}