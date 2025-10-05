<template>
    <div class="bg-white shadow-lg flex flex-col items-center justify-center w-fit p-5">
        <img class="w-[400px] mb-5" src="../assets/images/turtle.jpg" alt="Turtle">
        <div class="w-full">
            <button @click="handleLike" :class="['border w-1/2 py-3 transition-colors duration-200',
                isLiked ? 'bg-red-300 border-red-500 text-red-600' : 'hover:bg-gray-200'
            ]">
                <FontAwesomeIcon size="lg" :icon="['far', 'heart']"
                    :class="isLiked ? 'bg-red-300 border-red-500 text-red-600' : 'hover:bg-gray-50'" />
            </button>
            <button @click="handleDislike" :class="['border w-1/2 py-3 transition-colors duration-200',
                isDisliked ? 'bg-blue-300 border-blue-500 text-blue-600' : 'hover:bg-gray-200'
            ]">
                <font-awesome-icon size="lg" :icon="['far', 'thumbs-down']"
                    :class="isDisliked ? 'bg-blue-300 border-blue-500 text-blue-600' : 'hover:bg-gray-50'" />
            </button>
        </div>

        <!-- Message Display -->
        <div class="mt-4 text-center">
            <p class="text-gray-700 font-medium">{{ reactionMessage }}</p>
        </div>

        <!-- Bonus: Counter -->
        <div class="mt-3 flex gap-4 text-sm text-gray-600">
            <span class="flex items-center gap-1">
                <FontAwesomeIcon :icon="['far', 'heart']" class="text-red-500" />
                {{ likeCount }} likes
            </span>
            <span class="flex items-center gap-1">
                <FontAwesomeIcon :icon="['far', 'thumbs-down']" class="text-blue-500" />
                {{ dislikeCount }} dislikes
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
                // If already liked, remove like
                this.isLiked = false;
                // this.likeCount--;
            } else {
                // If disliked, remove dislike first
                if (this.isDisliked) {
                    this.isDisliked = false;
                    // this.dislikeCount--;
                }
                // Add like
                this.isLiked = true;
                this.likeCount++;
            }
        },
        handleDislike() {
            if (this.isDisliked) {
                // If already disliked, remove dislike
                this.isDisliked = false;
                // this.dislikeCount--;
            } else {
                // If liked, remove like first
                if (this.isLiked) {
                    this.isLiked = false;
                    // this.likeCount--;
                }
                // Add dislike
                this.isDisliked = true;
                this.dislikeCount++;
            }
        }
    }
}
</script>
<style>
.transition-colors {
    transition-property: color, background-color, border-color;
}
</style>