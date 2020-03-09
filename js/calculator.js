$(function () {

    const $dropdownList = document.querySelector(".calculator-boxes-box-right-dropdown-list");
    const $dropdownBtn = document.querySelector(".calculator-boxes-box-right-dropdown-btn");
    const $dropdownSpan = document.querySelector(".calculator-boxes-box-right-dropdown-span");
    const $dropdownLiList = $dropdownList.querySelectorAll("li");

    const $quantityInput = document.querySelector(".quantity");
    const $ordersInput = document.querySelector(".month-orders");
    const $packagePrice = document.querySelectorAll(".pricing-packages-price");
    const $accountingInput = document.querySelector(".accounting-checkbox");
    const $terminalInput = document.querySelector(".terminal-checkbox");

    const $productsOutput = document.querySelector(".products");
    const $ordersOutput = document.querySelector(".orders");
    const $packageOutput = document.querySelector(".package");
    const $accountingOutput = document.querySelector(".accounting");
    const $terminalOutput = document.querySelector(".terminal");

    const $total = document.querySelector(".calculator-boxes-box-left-components-total");

    const $productPartPrice = 0.5;
    const $orderPartPrice = 0.25;

    let $productTotalPrice = 0;
    let $orderTotalPrice = 0;
    let $packageTotalPrice = 0;
    let $accountingTotalPrice = 0;
    let $terminalTotalPrice = 0;

    let $totalPrice = ($productTotalPrice + $orderTotalPrice + $packageTotalPrice +
                        $accountingTotalPrice + $terminalTotalPrice);

    let $component = document.querySelectorAll(".component");

    for (let i = 0; i < $component.length; i++)
    {
        $component[i].classList.add("component-hidden");
    }

    $dropdownBtn.addEventListener("click", function(e)
    {
     e.preventDefault();
     $dropdownList.classList.toggle("visible-dropdown-list");
     $dropdownBtn.classList.toggle("rotate-btn");
    });

    $quantityInput.addEventListener("input", function(e)
    {
        if(e.target.value)
        {
            $productTotalPrice = e.target.value * $productPartPrice;
            $productsOutput.querySelectorAll("span")[0].innerText = "Products";
            $productsOutput.querySelectorAll("span")[1].innerText = e.target.value + " * $" + $productPartPrice;
            $productsOutput.querySelectorAll("span")[2].innerText = "$" + $productTotalPrice;
            $component[0].classList.remove("component-hidden");
        }
        else
        {
            $productTotalPrice = 0;
            $productsOutput.querySelectorAll("span")[0].innerText = "";
            $productsOutput.querySelectorAll("span")[1].innerText = "";
            $productsOutput.querySelectorAll("span")[2].innerText = "";
            $component[0].classList.add("component-hidden");
        }

     $totalPrice = ($productTotalPrice + $orderTotalPrice + $packageTotalPrice +
                    $accountingTotalPrice + $terminalTotalPrice);
     $total.querySelectorAll("span")[1].innerText = "$" + $totalPrice;
    });

    $ordersInput.addEventListener("input", function(e) {

        if (e.target.value)
        {
            $orderTotalPrice = e.target.value * $orderPartPrice;
            $ordersOutput.querySelectorAll("span")[0].innerText = "Orders";
            $ordersOutput.querySelectorAll("span")[1].innerText = e.target.value + " * $" + $orderPartPrice;
            $ordersOutput.querySelectorAll("span")[2].innerText = "$" + $orderTotalPrice;
            $component[1].classList.remove("component-hidden");
        }
        else
        {
            $orderTotalPrice = 0;
            $ordersOutput.querySelectorAll("span")[0].innerText = "";
            $ordersOutput.querySelectorAll("span")[1].innerText = "";
            $ordersOutput.querySelectorAll("span")[2].innerText = "";
            $component[1].classList.add("component-hidden");
        }

     $totalPrice = ($productTotalPrice + $orderTotalPrice + $packageTotalPrice +
                    $accountingTotalPrice + $terminalTotalPrice);
     $total.querySelectorAll("span")[1].innerText = "$" + $totalPrice;
    });

    for (i = 0; i < $dropdownLiList.length; i++)
    {
         $dropdownLiList[i].addEventListener("click", function(e)
         {
             $dropdownSpan.innerText = e.target.innerText;
             $packageOutput.querySelectorAll("span")[0].innerText = "Package";
             $packageOutput.querySelectorAll("span")[1].innerText = e.target.innerText;

             if(e.target === $dropdownLiList[0])
             {
                 $packageOutput.querySelectorAll("span")[2].innerText = $packagePrice[0].innerText;
                 $packageTotalPrice = parseInt($packagePrice[0].innerText.
                                      substr(1, $packagePrice[0].innerText.length));
                 $component[2].classList.remove("component-hidden");
             }
             else if (e.target === $dropdownLiList[1])
             {
                 $packageOutput.querySelectorAll("span")[2].innerText = $packagePrice[1].innerText;
                 $packageTotalPrice = parseInt($packagePrice[1].innerText.
                                      substr(1, $packagePrice[1].innerText.length));
                 $component[2].classList.remove("component-hidden");
             }
             else if (e.target === $dropdownLiList[2])
             {
                 $packageOutput.querySelectorAll("span")[2].innerText = $packagePrice[2].innerText;

                 $packageTotalPrice = parseInt($packagePrice[2].innerText.
                                      substr(1, $packagePrice[2].innerText.length));
                 $component[2].classList.remove("component-hidden");
             }

             $totalPrice = ($productTotalPrice + $orderTotalPrice + $packageTotalPrice +
                            $accountingTotalPrice + $terminalTotalPrice);
             $total.querySelectorAll("span")[1].innerText = "$" + $totalPrice;

         });
    }

    $accountingInput.addEventListener("click", function(e)
    {
        if(e.target.checked === true)
        {
            $accountingTotalPrice = 35;
            $accountingOutput.querySelectorAll("span")[0].innerText = "Accounting";
            $accountingOutput.querySelectorAll("span")[1].innerText = "$" + $accountingTotalPrice;
            $component[3].classList.remove("component-hidden");
        }
        else
        {
            $accountingTotalPrice = 0;
            $accountingOutput.querySelectorAll("span")[0].innerText = "";
            $accountingOutput.querySelectorAll("span")[1].innerText = "";
            $component[3].classList.add("component-hidden");
        }

        $totalPrice = $productTotalPrice + $orderTotalPrice + $packageTotalPrice + $accountingTotalPrice + $terminalTotalPrice;
        $total.querySelectorAll("span")[1].innerText = "$" + $totalPrice;
    });

    $terminalInput.addEventListener("click", function(e)
    {
        if(e.target.checked === true)
        {
            $terminalTotalPrice = 5;
            $terminalOutput.querySelectorAll("span")[0].innerText = "Terminal";
            $terminalOutput.querySelectorAll("span")[1].innerText = "$" + $terminalTotalPrice;
            $component[4].classList.remove("component-hidden");
        }
        else
        {
            $terminalTotalPrice = 0;
            $terminalOutput.querySelectorAll("span")[0].innerText = "";
            $terminalOutput.querySelectorAll("span")[1].innerText = "";
            $component[4].classList.add("component-hidden");
        }

        $totalPrice = $productTotalPrice + $orderTotalPrice + $packageTotalPrice +
                      $accountingTotalPrice + $terminalTotalPrice;
        $total.querySelectorAll("span")[1].innerText = "$" + $totalPrice;
    });

});