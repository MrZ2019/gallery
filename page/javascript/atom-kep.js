/**
 * @author shadow
 * @filename
 */

/**
 * get a random integer
 */

function rand_int(maxInteger, minInteger) {

    if(maxInteger == null) {
        maxInteger = 100;
    }
    minInteger = minInteger || 0;

    // get integer use Math.random() and Math.round()

    return Math.round(Math.random() * (maxInteger - minInteger) + minInteger);
}