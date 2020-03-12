// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    let bool = true;
    if ((node.data < min && min !== null) || (node.data > max && max !== null))
        return false;
    
    if(node.left == null && node.right == null)
        return true;
    
    if(node.left)
        bool = validate(node.left, min, node.data);

    if(node.right && bool != false)
        bool = validate(node.right, node.data, max);
    
    return bool;
}

module.exports = validate;
