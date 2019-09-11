const { Component } = wp.element;
const { HelperFunction: { animationAttr } } = wp.qubelyComponents

class Save extends Component {
    renderListItems = () => {
        const { attributes: { listItems } } = this.props

        return listItems.map(item => <li>{item}</li>)

    }
    render() {
        const { attributes: { uniqueId, alignment, bulletStyle, listType, animation } } = this.props
        const ListTag = listType == 'ordered' ? 'ol' : 'ul'
        return (
            <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={`qubely-block-advanced-list qubely-alignment-${alignment}`}>
                    <ListTag className={`qubely-list qubely-list-type-${listType} qubely-list-bullet-${bulletStyle.name}`}>
                        {this.renderListItems()}
                    </ListTag>

                </div>
            </div>
        );
    }
}

export default Save;