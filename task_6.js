function sortMerge(mas){
    function Merge(a,low,mid,high){
        var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
        while(h<=mid && j<=high){
            if(a[h]<=a[j]){
                b[i]=a[h];
                h++;
            }else{
                b[i]=a[j];
                j++;
            }
            i++;
        }
        if(h>mid){
            for(k=j; k<=high; k++){
                b[i]=a[k];
                i++;
            }
        }else{
            for(k=h; k<=mid; k++){
                b[i]=a[k];
                i++;
            }
        }
        for(k=0; k<=high-low; k++) a[k+low]=b[k];
        return a;
    }
    
    function merge_sort(a,low,high){
        if(low<high){
            var mid=Math.floor((low+high)/2);
            merge_sort(a, low, mid);
            merge_sort(a, mid+1, high);
            Merge(a, low, mid, high);
        }
    }
        merge_sort(mas, 0, mas.length-1);
        return mas;
    }
    
    var a=[25,96,10,1,5,45,0];
    console.log(a.join(), "--", sortMerge(a).join());
    //a=sortMerge(a);
    //console.log(a);
    