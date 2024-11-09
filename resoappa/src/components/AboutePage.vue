<template lang="">
    <div class="container my-5">
        <h2 class="text-center mb-4">About Us</h2>
        
        <!-- Introduction Section -->
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <p class="lead">
                    We are a passionate team dedicated to providing exceptional services to our clients. Our mission is to bring innovation and quality to everything we do.
                </p>
            </div>
        </div>
        
        <!-- Team or Values Section -->
        <div class="row mt-5">
            <div class="col-md-4 mb-4" v-for="(member, index) in teamMembers" :key="index">
                <div class="card h-100 shadow-sm">
                    <img :src="member.image" class="card-img-top" alt="Team member photo">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ member.name }}</h5>
                        <p class="card-text">{{ member.role }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            // Sample data for team members or values
            teamMembers: [
                {
                    name: "John Doe",
                    role: "CEO",
                    image: "https://picsum.photos/300/200?random=1",
                },
                {
                    name: "Jane Smith",
                    role: "CTO",
                    image: "https://picsum.photos/300/200?random=2",
                },
                {
                    name: "Sam Wilson",
                    role: "Head of Marketing",
                    image: "https://picsum.photos/300/200?random=3",
                }
            ]
        };
    }
};
</script>

<style scoped>
.container {
    max-width: 800px;
}

.card {
    border-radius: 8px;
    overflow: hidden;
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 20px;
}

h2 {
    font-weight: bold;
    font-size: 2rem;
    color: #333;
}

p.lead {
    font-size: 1.1rem;
    color: #666;
}

.card-title {
    font-weight: 600;
    color: #333;
}

.card-text {
    font-size: 0.9rem;
    color: #777;
}
</style>
