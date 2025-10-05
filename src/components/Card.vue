<template>
    <div
        class="bg-white shadow-lg flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 sm:p-5 rounded-lg">
        <!-- Image responsive -->
        <img class="w-full max-w-[300px] sm:max-w-[400px] h-auto mb-4 sm:mb-5 rounded-lg"
            src="../assets/images/turtle.jpg" alt="Turtle">

        <!-- Buttons responsive -->
        <div class="w-full flex flex-col sm:flex-row gap-2 sm:gap-0">
            <button @click="handleLike" :class="['border w-full sm:w-1/2 py-2 sm:py-3 px-4 transition-colors duration-200 text-sm sm:text-base rounded sm:rounded-none sm:rounded-l-lg',
                isLiked ? 'bg-red-300 border-red-500 text-red-600' : 'hover:bg-gray-200'
            ]">
                <FontAwesomeIcon size="lg" :icon="['far', 'heart']"
                    :class="isLiked ? 'text-red-600' : 'text-gray-600'" />
                <span class="ml-2 sm:hidden">Like</span>
            </button>

            <button @click="handleDislike" :class="['border w-full sm:w-1/2 py-2 sm:py-3 px-4 transition-colors duration-200 text-sm sm:text-base rounded sm:rounded-none sm:rounded-r-lg',
                isDisliked ? 'bg-blue-300 border-blue-500 text-blue-600' : 'hover:bg-gray-200'
            ]">
                <FontAwesomeIcon size="lg" :icon="['far', 'thumbs-down']"
                    :class="isDisliked ? 'text-blue-600' : 'text-gray-600'" />
                <span class="ml-2 sm:hidden">Dislike</span>
            </button>
        </div>

        <!-- Message Display responsive -->
        <div class="mt-3 sm:mt-4 text-center px-2">
            <p class="text-gray-700 font-medium text-sm sm:text-base">{{ reactionMessage }}</p>
        </div>

        <!-- Counter responsive -->
        <div class="mt-2 sm:mt-3 flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <span class="flex items-center justify-center sm:justify-start gap-1">
                <FontAwesomeIcon :icon="['far', 'heart']" class="text-red-500" />
                <span>{{ likeCount }} likes</span>
            </span>
            <span class="flex items-center justify-center sm:justify-start gap-1">
                <FontAwesomeIcon :icon="['far', 'thumbs-down']" class="text-blue-500" />
                <span>{{ dislikeCount }} dislikes</span>
            </span>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to the library
library.add(faHeart, faThumbsDown);

export default {
    name: 'Card',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            isLiked: false,
            isDisliked: false,
            likeCount: 0,
            dislikeCount: 0
        }
    },
    computed: {
        reactionMessage() {
            if (this.isLiked) {
                return "You liked this post!";
            } else if (this.isDisliked) {
                return "You disliked this post!";
            } else {
                return "No reaction yet.";
            }
        }
    },
    methods: {
        handleLike() {
            if (this.isLiked) {
                this.isLiked = false;
            } else {
                if (this.isDisliked) {
                    this.isDisliked = false;
                }
                this.isLiked = true;
                this.likeCount++;
            }
        },
        handleDislike() {
            if (this.isDisliked) {
                this.isDisliked = false;
            } else {
                if (this.isLiked) {
                    this.isLiked = false;
                }
                this.isDisliked = true;
                this.dislikeCount++;
            }
        }
    }
}
</script>

<style scoped>
.transition-colors {
    transition-property: color, background-color, border-color;
}

/* Custom responsive adjustments */
@media (max-width: 640px) {
    /* Additional mobile-specific styles if needed */
}

@media (min-width: 641px) and (max-width: 1024px) {
    /* Tablet-specific styles if needed */
}
</style>