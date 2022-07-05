<template>
  <div class="wrapper-stepper" >
    <div class="stepper" style="margin: auto;" >
      <div class="stepper-progress">
        <div
          class="stepper-progress-bar"
          :style="'width:' + stepperProgress"
        ></div>
      </div>

      <div class="stepper-item" :class="{ current: step == 2, success: step > 2 }">
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
            alt=""
          />
          <span class="number">1
          </span>
        </div>
        <span class="stepper-item-title"> INCOMING</span>
      </div>

      <div class="stepper-item" :class="{ current: step == 2, success: step > 2 }">
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
            alt=""
          />
          <span class="number">2
          </span>
        </div>
        <span class="stepper-item-title"> OBLIGATE</span>
      </div>
      <div class="stepper-item" :class="{ current: step == 3 }">
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
            alt=""
          />
          <span class="number">3
          </span>
        </div>
        <span class="stepper-item-title"> JOURNAL</span>
      </div>

      <div class="stepper-item">
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
            alt=""
          />
          <span class="number">4
          </span>
        </div>
        <span class="stepper-item-title"> CERTIFIED</span>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  data: () => ({
    step: 3,
  }),
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
$default    :   #C5C5C5;
$green-1    :   #75CC65;
$transiton  :   all 500ms ease;

body{
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    color: #ffffff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
}

.tx-green-1{
    color:  $green-1;
    font-weight: 600;
}

.wrapper-stepper{
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;

    &-progress{
        position: absolute;
        background-color: $default;
        height: 2px;
        z-index: -1;
        left: 0;
        right: 0;
        margin: 0 auto;

        &-bar{
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: $green-1;
            transition: $transiton;
        }
    }
}


  .stepper-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $default;
      transition: $transiton;

      &-counter{
          height: 100px;
          width: 100px;
          display: grid;
          place-items: center;
          background-color: #fff;
          border-radius: 100%;
          border: 2px solid $default;
          position: relative;

          .icon-success{
              position: absolute;
              opacity: 0;
              transform: scale(0);
              width: 24px;
              transition: $transiton;
          }

          .number{
              font-size: 22px;
              transition: $transiton;
          }
      }

      &-title{
          position: absolute;
          font-size: 14px;
          bottom: -24px;
      }
  }

.stepper-item.success{
    .stepper-item-counter{
        border-color: $green-1;
        background-color: #c8ebc1;
        color: #fff;
        font-weight: 600;

        .icon-success{
            opacity: 1;
            transform: scale(1);
        }

        .number{
            opacity: 0;
            transform: scale(0);
        }
    }

    .stepper-item-title{
        color: $green-1;
    }
}

@media only screen and (max-width: 600px) {
  .stepper-item{
        &-counter{
            height: 40px;
            width: 40px;
        }
        &-title{
            font-size: 8px;
            bottom: -24px;
        }
    }

    .stepper-item.success{
      .stepper-item-counter{
      border-color: $green-1;
      background-color: #c8ebc1;
      color: #fff;
      font-weight: 600;
      .icon-success{
          opacity: 1;
          transform: scale(0.7);
      }
      }
    }
  }
.stepper-item.current{
    .stepper-item-counter{
        border-color: $green-1;
        background-color: $green-1;
        color: #fff;
        font-weight: 600;
    }

    .stepper-item-title{
        color: #818181;
    }
}

.stepper-pane{
    color: #333;
    text-align: center;
    padding: 120px 60px;
    box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
    margin: 40px 0;
}

.controls{
    display: flex;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border-color: #f0f0f0;

    &:disabled{
        opacity: 0.5;
        pointer-events: none;
    }

    &--green-1{
        background-color: $green-1;
        border-color: $green-1;
        color: #fff;
        margin-left: auto;
    }
}
</style>>

</style>