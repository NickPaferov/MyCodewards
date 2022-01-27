function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : dist * 100 * (num_pill - 1) + width * (num_pill - 2);
}