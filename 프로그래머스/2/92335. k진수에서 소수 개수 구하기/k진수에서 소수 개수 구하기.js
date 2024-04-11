function solution(n, k) {
    const primeNum = n.toString(k).split('0').filter(num => num !== '').map(Number);   // n을 k진수로 변환하고 0 기준으로 슬라이싱
    
    // 소수 카운팅
    let primeCnt = 0;
    primeNum.forEach(num => {
        if (num === 1) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        primeCnt++; // 모든 i에 대해 나누어 떨어지지 않으면 소수
    })
    
    return primeCnt;
}