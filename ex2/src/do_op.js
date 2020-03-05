function callBack(err, res) {
    if (err !== undefined)
        console.error(err);
    if (res !== undefined)
        console.log(res.toString());
}

function do_op(nb, operator,nb2, result) {
    if (!nb || !operator || !nb2) {
        callBack('Too few arguments', undefined);
        return;
    }
    if (operator != '+' && operator != '/' && operator != '-' && operator != '*' && operator != '%') {
        callBack('Bad operator', undefined);
        return;
    }
    nb = parseInt(nb);
    nb2 = parseInt(nb2);
    switch (operator) {
    case '+':
        callBack(undefined, nb + nb2);
        break;
    case '-':
        callBack(undefined, nb - nb2);
        break;
    case '/':
        nb2 == 0 ? callBack('Division by 0', null) : callBack(null, nb / nb2);
        break;
    case '*':
        callBack(undefined, nb * nb2);
        break;
    case '%':
        callBack(undefined, nb % nb2);
        break;
    }
}

do_op(process.argv[2], process.argv[3], process.argv[4], callBack);
